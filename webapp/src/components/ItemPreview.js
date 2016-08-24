import React from 'react'
import {Card, CardActions, CardHeader, CardTitle, CardText} from 'material-ui/Card';

export default function ({name, description, price}) {
    const cardStyle = {
        height: 250,
        width: 250,
        margin: 50
    }

    return (
            <Card style={cardStyle}>
                <CardTitle title={name} subtitle={price}/>
                <CardText>{description}</CardText>
            </Card>
    )
}