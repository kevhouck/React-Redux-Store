import api from '../utils/api'
import { normalize } from 'normalizr'

// Action key that carries API call info interpreted by this Redux middleware.
export const CALL_API = Symbol('Call API')

function callApi(endpoint, method, jwt, schema) {

    return api.request({
        url: endpoint,
        method: method,
        headers: {'Authorization': 'Bearer ${jwt}'}
    }).then(({status, data}) => {
        if (status !== 200) {
            return Promise.reject(data)
        }

        return normalize(data, schema)
    })
}

// A Redux middleware that interprets actions with CALL_API info specified.
// Performs the call and promises when such actions are dispatched.
export default store => next => action => {
    const callAPI = action[CALL_API]
    if (typeof callAPI === 'undefined') {
        return next(action)
    }

    let { endpoint, method } = callAPI
    const { schema, types } = callAPI

    if (typeof endpoint === 'function') {
        endpoint = endpoint(store.getState())
    }

    if (typeof endpoint !== 'string') {
        throw new Error('Specify a string endpoint URL.')
    }
    if (typeof method !== 'string') {
        throw new Error('Specify a string http method.')
    }
    if (!schema) {
        throw new Error('Specify one of the exported Schemas.')
    }
    if (!Array.isArray(types) || types.length !== 3) {
        throw new Error('Expected an array of three action types.')
    }
    if (!types.every(type => typeof type === 'string')) {
        throw new Error('Expected action types to be strings.')
    }

    let { jwt } = store.getState()

    function actionWith(data) {
        const finalAction = Object.assign({}, action, data)
        delete finalAction[CALL_API]
        return finalAction
    }

    const [ requestType, successType, failureType ] = types
    next(actionWith({ type: requestType }))

    return callApi(endpoint, method, jwt, schema).then(
        response => next(actionWith({
            response,
            type: successType
        })),
        error => next(actionWith({
            type: failureType,
            error: error.message || 'Something bad happened'
        }))
    )
}
