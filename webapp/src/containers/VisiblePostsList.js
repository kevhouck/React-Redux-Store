import React, { Component, PropTypes } from 'react'
import PostsList from '../components/PostsList'
import { connect } from 'react-redux'
import { loadPosts } from '../actions'
import _ from 'lodash'

class VisiblePostsList extends Component {
    constructor(props) {
        super(props)
        this.state = {
            loadingPosts: true
        }
    }

    componentWillMount() {
        this.props.loadPosts()
        window.addEventListener('scroll', this.handleScroll.bind(this))
    }

    componentWillReceiveProps() {
        this.setState({loadingPosts: false})
    }

    checkIfAndThenLoadPosts() {
        if (this.checkIfWindowAtBottom() && !this.state.loadingPosts) {
            this.props.loadPosts()
            this.setState({loadingPosts: true})
        }
    }

    handleScroll(event) {
        event.preventDefault()
        this.checkIfAndThenLoadPosts()
    }

    checkIfWindowAtBottom() {
        return (window.innerHeight + window.scrollY) >= document.body.offsetHeight
    }

    render() {
        const divStyle = {
            paddingLeft: 100,
            paddingRight: 100
        }

        const { postsToDisplay } = this.props

        return (
            <div style={divStyle}>
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
    const postsToDisplay = []
    _.forOwn(posts, (post, key) => {
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
