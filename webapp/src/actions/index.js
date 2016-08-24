import { CALL_API } from 'redux-api-middleware'
import { Schemas } from '../schemas'
import { normalize } from 'normalizr'
import _ from 'lodash'
import { push } from 'react-router-redux'

export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'
export const MOVE_VISIBLE_POSTS_CURSOR = 'MOVE_VISIBLE_POSTS_CURSOR'

export const ITEMS_REQUEST = 'ITEMS_REQUEST'
export const ITEMS_SUCCESS = 'ITEMS_SUCCESS'
export const ITEMS_FAILURE = 'ITEMS_FAILURE'
export const MOVE_VISIBLE_ITEMS_CURSOR = 'MOVE_VISIBLE_ITEMS_CURSOR'

export const SIGNUP_REQUEST = 'SIGNUP_REQUEST'
export const SIGNUP_SUCCESS = 'SIGNUP_SUCCESS'
export const SIGNUP_FAILURE = 'SIGNUP_FAILURE'

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGIN_FAILURE = 'LOGIN_FAILURE'

export const LOGOUT = 'LOGOUT'

function fetchPosts(nextPage) {
    return {
        [CALL_API]: {
            types: [
                POSTS_REQUEST, {
                type: POSTS_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, { posts: Schemas.POST_ARRAY }))
                    }
                },
                POSTS_FAILURE ],
            method: 'GET',
            endpoint: `http://localhost:3000/api/post?page=${nextPage}`,
        }
    }
}

export function loadPosts() {
    return (dispatch, getState) => {
        const { isFetching, noMore, nextPage, pagesLoaded } = getState().visiblePosts

        // if the page is cached
        if (_.includes(pagesLoaded, nextPage)) {
            return dispatch({
                type: MOVE_VISIBLE_POSTS_CURSOR
            })
        }

        // if we are already fetching a the page or there are no more to fetch
        if (isFetching || noMore) {
            return
        }

        return dispatch(fetchPosts(nextPage))
    }
}

function fetchItems(nextPage) {
    return {
        [CALL_API]: {
            types: [
                ITEMS_REQUEST, {
                    type: ITEMS_SUCCESS,
                    payload: (action, state, res) => {
                        return res.json().then((json) => normalize(json, {items: Schemas.ITEMS_ARRAY}))
                    }
                },
                ITEMS_FAILURE ],
            method: 'GET',
            endpoint: `http://localhost:3000/api/item?page=${nextPage}`,
        }
    }
}

export function loadItems() {
    return (dispatch, getState) => {
        const { isFetching, noMore, nextPage, pagesLoaded } = getState().visibleItems

        // if the page is cached
        if (_.includes(pagesLoaded, nextPage)) {
            return dispatch({
                type: MOVE_VISIBLE_ITEMS_CURSOR
            })
        }

        // if we are already fetching a the page or there are no more to fetch
        if (isFetching || noMore) {
            return
        }

        return dispatch(fetchItems(nextPage))
    }
}

export function signup(body) {
    return (dispatch, getState) => {

        const { isLoggedIn } = getState().user.isLoggedIn

        if (isLoggedIn) {
            return
        }

        return dispatch({
            [CALL_API]: {
                types: [
                    SIGNUP_REQUEST, {
                        type: SIGNUP_SUCCESS,
                        payload: (action, state, res) => {
                            return res.json().then((json) => {
                                dispatch(push('/'))
                                return normalize(json, {user: Schemas.USER})
                            })
                        }
                    },
                    SIGNUP_FAILURE ],
                method: 'POST',
                endpoint: 'http://localhost:3000/api/signup',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            }
        })
    }
}

export function login(body) {
    return (dispatch, getState) => {

        const { isLoggedIn } = getState().user.isLoggedIn

        if (isLoggedIn) {
            return
        }

        return dispatch({
            [CALL_API]: {
                types: [
                    LOGIN_REQUEST, {
                        type: LOGIN_SUCCESS,
                        payload: (action, state, res) => {
                            dispatch(push('/'))
                            return res.json().then((json) => normalize(json, { user: Schemas.USER }))
                        }
                    },
                    LOGIN_FAILURE ],
                method: 'POST',
                endpoint: 'http://localhost:3000/api/login',
                body: JSON.stringify(body),
                headers: { 'Content-Type': 'application/json' }
            }
        })
    }
}

export const logout = () => {
    return {
        type: LOGOUT
    }
}

// navigation
export const goToHome = () => {
    return push('/')
}

export const goToBlog = () => {
    return push('/blog')
}

export const goToStore = () => {
    return push('/store')
}

export const goToLogin = () => {
    return push ('/login')
}

export const goToSignup = () => {
    return push ('/signup')
}