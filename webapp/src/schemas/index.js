import { Schema, arrayOf } from 'normalizr'

const postSchema = new Schema('posts')

export const Schemas = {
    POST: postSchema,
    POST_ARRAY: arrayOf(postSchema)
}
