import React, { Component, PropTypes } from 'react'

class Store extends Component {
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

export default Store