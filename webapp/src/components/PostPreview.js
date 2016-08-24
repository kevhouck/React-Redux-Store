import React from 'react'
var ReactMarkdown = require('react-markdown');
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

export default function ({title, author, content, submittedOn}) {
    const divStyle = {
        marginTop: 100,
        marginBottom: 100
    }

    return (
        <div style={divStyle}>
            <Card>
                <CardHeader subtitle={submittedOn}/>
                <CardTitle title={title} subtitle={author}/>
                <CardText>
                    <ReactMarkdown source={content}/>
                </CardText>
            </Card>
        </div>
    )
}