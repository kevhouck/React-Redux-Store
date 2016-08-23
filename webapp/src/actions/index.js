import { CALL_API } from '../middleware/api'
import { Schemas } from '../schemas'
import _ from 'lodash'


export const POSTS_REQUEST = 'POSTS_REQUEST'
export const POSTS_SUCCESS = 'POSTS_SUCCESS'
export const POSTS_FAILURE = 'POSTS_FAILURE'

function fetchPosts() {
    return {
        [CALL_API]: {
            types: [ POSTS_REQUEST, POSTS_SUCCESS, POSTS_FAILURE ],
            method: 'get',
            endpoint: `post`,
            schema: Schemas.POST_ARRAY
        }
    }
}

export function loadPosts() {
    return (dispatch, getState) => {
        const posts = _.map(getState().entities.posts, 'id')
        if (posts.length !== 0) {
            return null
        }

        return dispatch(fetchPosts())
    }
}