import React, { Component, PropTypes } from 'react'

class Blog extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props
        return(
            <div>
                {children}
            </div>
        )
    }
}

export default Blog