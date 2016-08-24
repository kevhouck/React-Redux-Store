import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

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

function visiblePosts(state = { isFetching: false, noMore: false, postsToShow: [], nextPage: 1, pagesLoaded: [] }, action) {

    // handle incrementing infinite scroll posts cursor
    if (action.type === ActionTypes.MOVE_VISIBLE_POSTS_CURSOR) {
        const { nextPage } = state
        return merge({}, state, { nextPage: nextPage + 1 })
    }

    // handle UI fetch changes, and prevent more requests
    if (action.type === ActionTypes.POSTS_REQUEST) {
        return merge({}, state, { isFetching: true })
    }

    // handle posts received UI changes and pages cached, cursor logic
    if (action.type === ActionTypes.POSTS_SUCCESS && action.payload && action.payload.result) {
        const noMore = (action.payload.entities.posts.length < 10)
        const { nextPage } = state // this is the page we've fetched
        return merge({}, state, { isFetching: false, pagesLoaded: [nextPage], nextPage: nextPage + 1, noMore })
    }

    if (action.type === ActionTypes.LOGOUT) {
        return { isFetching: false, noMore: false, postsToShow: [], nextPage: 1, pagesLoaded: [] }
    }

    return state
}

function visibleItems(state = { isFetching: false, noMore: false, itemsToShow: [], nextPage: 1, pagesLoaded: [] }, action) {

    // handle incrementing infinite scroll posts cursor
    if (action.type === ActionTypes.MOVE_VISIBLE_ITEMS_CURSOR) {
        const { nextPage } = state
        return merge({}, state, { nextPage: nextPage + 1 })
    }

    // handle UI fetch changes, and prevent more requests
    if (action.type === ActionTypes.ITEMS_REQUEST) {
        return merge({}, state, { isFetching: true })
    }

    // handle posts received UI changes and pages cached, cursor logic
    if (action.type === ActionTypes.ITEMS_SUCCESS && action.payload && action.payload.result) {
        const noMore = (action.payload.entities.items.length < 10)
        const { nextPage } = state // this is the page we've fetched
        return merge({}, state, { isFetching: false, pagesLoaded: [nextPage], nextPage: nextPage + 1, noMore })
    }

    if (action.type === ActionTypes.LOGOUT) {
        return { isFetching: false, noMore: false, itemsToShow: [], nextPage: 1, pagesLoaded: [] }
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