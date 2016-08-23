import * as ActionTypes from '../actions'
import merge from 'lodash/merge'
import { routerReducer as routing } from 'react-router-redux'
import { combineReducers } from 'redux'

function entities(state = { posts: {} }, action) {

    if (action.type === ActionTypes.POSTS_SUCCESS && action.payload && action.payload.entities) {
        return merge({}, state, action.payload.entities)
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

    return state
}

const rootReducer = combineReducers({
    entities,
    visiblePosts,
    routing
})

export default rootReducer