import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function entities(state = { posts: {} }, action) {
    debugger
    if (action.response && action.response.entities) {
        debugger
        return merge({}, state, action.response.entities)
    }

    return state
}

const rootReducer = combineReducers({
    entities,
    routing
})

export default rootReducer