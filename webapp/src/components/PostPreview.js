import React from 'react'

export default function ({title, author, content}) {
    return (
        <div>
            <p>{title}</p>
            <p>{content}</p>
        </div>
    )
}