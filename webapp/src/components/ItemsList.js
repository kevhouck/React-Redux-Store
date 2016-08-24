import React from 'react'
import ItemPreview from './ItemPreview'

export default function ({items}) {
    function createItemPreviewNode(item) {

        return (
                <ItemPreview key={item.id} {...item}/>
            )
    }

    const itemPreviewNodes = items.map(item => createItemPreviewNode(item))

    const divStyle = {
        display: "flex",
        flexWrap: "wrap",
        marginTop: 100,
        marginBottom: 100,
        justifyContent: "center"
    }

    return (
        <div style={divStyle}>
                {itemPreviewNodes}
        </div>
    )
}