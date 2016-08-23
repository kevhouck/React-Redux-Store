import React, { Component, PropTypes } from 'react'
import PostsList from '../components/PostsList'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import _ from 'lodash'

class VisiblePostsList extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        debugger
        this.props.loadPosts()
    }

    render() {
        debugger
        const { postsToDisplay } = this.props

        return (
            <div>
                <p>Visible posts list</p>
                <PostsList posts={postsToDisplay}/>
            </div>
        )
    }
}

VisiblePostsList.propTypes = {
    postsToDisplay: PropTypes.array.isRequired
}

function mapStateToProps(state) {
    const {
        entities: {posts}
    } = state
    debugger
    const postsToDisplay = []
    _.forOwn(posts, (post, key) => {
        debugger
        postsToDisplay.push(post)
    })

    return {
        postsToDisplay
    }
}

export default connect(
    mapStateToProps,
    { loadPosts }
)(VisiblePostsList)
