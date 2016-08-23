import React from 'react'
var ReactMarkdown = require('react-markdown');

export default function ({title, author, content}) {
    return (
        <span>
            <ReactMarkdown source={content}/>
        </span>
    )
}