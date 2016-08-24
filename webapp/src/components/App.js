import React, { Component, PropTypes } from 'react'
import Header from '../containers/Header'

class App extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const { children } = this.props
        return (
            <div>
                <Header/>
                { children }
            </div>
        )
    }
}

export default App