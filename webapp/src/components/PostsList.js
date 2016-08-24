import React from 'react'
import PostPreview from './PostPreview'

export default function ({posts}) {
    function createPostPreviewNode({id, title, author, content, submittedOn}) {
        return <PostPreview key={id} title={title} author={author} content={content} submittedOn={submittedOn}/>
    }

    const postPreviewNodes = posts.map(post => createPostPreviewNode(post))

    return (<div>{postPreviewNodes}</div>)
}