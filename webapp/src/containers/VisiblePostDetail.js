import React, { Component, PropTypes } from 'react'
import PostDetail from '../components/PostDetail'

class VisiblePostDetail extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        return(
            <div>
                <PostDetail/>
            </div>
        )
    }
}

export default VisiblePostDetail