import { Schema, arrayOf } from 'normalizr'

const postSchema = new Schema('posts')

const itemSchema = new Schema('items')

export const Schemas = {
    POST: postSchema,
    POST_ARRAY: arrayOf(postSchema),
    ITEM: itemSchema,
    ITEMS_ARRAY: arrayOf(itemSchema)
}
