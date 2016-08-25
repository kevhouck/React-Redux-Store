import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'
import _ from 'lodash'

function entities(state = { posts: {}, items: {}, users: {} }, action) {

    if (action.type === ActionTypes.POSTS_SUCCESS && action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities)
    }

    if (action.type === ActionTypes.ITEMS_SUCCESS && action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities)
    }

    if ((action.type === ActionTypes.SIGNUP_SUCCESS || action.type === ActionTypes.LOGIN_SUCCESS)  && action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities)
    }

    if (action.type === ActionTypes.LOGOUT) {
        return { posts: {}, items: {}, users: {} }
    }

    return state
}

function visiblePosts(state = { isFetching: false, noMore: false, nextPage: 1 }, action) {

    // handle UI fetch changes, and prevent more requests
    if (action.type === ActionTypes.POSTS_REQUEST) {
        return merge({}, state, { isFetching: true })
    }

    // handle posts received UI changes and pages cached, cursor logic
    if (action.type === ActionTypes.POSTS_SUCCESS && action.payload && action.payload.result) {
        const noMore = (!action.payload.entities.posts || _.keys(action.payload.entities.posts).length < 10)
        const { nextPage } = state
        // make sure this is the next page we wanted
        if (nextPage == action.payload.result.page) {
            return merge({}, state, { isFetching: false, nextPage: nextPage + 1, noMore })
        }
        return merge({}, state, { isFetching: false, nextPage: nextPage, noMore })
    }

    if (action.type === ActionTypes.LOGOUT) {
        return { isFetching: false, noMore: false, nextPage: 1 }
    }

    return state
}

function visibleItems(state = { isFetching: false, noMore: false, nextPage: 1 }, action) {

    // handle UI fetch changes, and prevent more requests
    if (action.type === ActionTypes.ITEMS_REQUEST) {
        return merge({}, state, { isFetching: true })
    }

    // handle posts received UI changes and pages cached, cursor logic
    if (action.type === ActionTypes.ITEMS_SUCCESS && action.payload && action.payload.result) {
        const noMore = (!action.payload.entities.items || _.keys(action.payload.entities.items).length < 10)
        const { nextPage } = state
        // make sure this is the next page we wanted
        if (nextPage == action.payload.result.page) {
            return merge({}, state, { isFetching: false, nextPage: nextPage + 1, noMore })
        }
        return merge({}, state, { isFetching: false, nextPage: nextPage, noMore })
    }

    if (action.type === ActionTypes.LOGOUT) {
        return { isFetching: false, noMore: false, nextPage: 1 }
    }

    return state
}

function user(state = { isLoggedIn: false, user: null, credentials: null  }, action) {
    // handle login or signup logged in user and their credentials
    if ((action.type === ActionTypes.SIGNUP_SUCCESS || action.type === ActionTypes.LOGIN_SUCCESS)  && action.payload && action.payload.result) {
        const { user, credentials } = action.payload.result
        return merge({}, state, { user, credentials, isLoggedIn: true })
    }

    if (action.type === ActionTypes.LOGOUT) {
        return { isLoggedIn: false, user: null, credentials: null  }
    }

    return state
}

const rootReducer = combineReducers({
    entities,
    visiblePosts,
    visibleItems,
    user,
    routing
})

export default rootReducer