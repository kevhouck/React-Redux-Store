import { Schema, arrayOf } from 'normalizr'

const postSchema = new Schema('posts')

const itemSchema = new Schema('items')

const userSchema = new Schema('users')

export const Schemas = {
    POST: postSchema,
    POST_ARRAY: arrayOf(postSchema),
    ITEM: itemSchema,
    ITEMS_ARRAY: arrayOf(itemSchema),
    USER: userSchema
}
