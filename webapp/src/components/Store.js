import React, { Component, PropTypes } from 'react'
import MainTabBar from '../containers/MainTabBar'

class Store extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const { children } = this.props
        return(
            <div>
                <MainTabBar/>
                {children}
            </div>
        )
    }
}

export default Store