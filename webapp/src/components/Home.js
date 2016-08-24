import React, { Component, PropTypes } from 'react'

class Home extends Component {
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

export default Home