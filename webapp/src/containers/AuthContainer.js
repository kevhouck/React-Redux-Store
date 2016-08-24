import React, { Component, PropTypes } from 'react'
import { goToHome, goToLogin, goToSignup } from '../actions'
import { connect } from 'react-redux'
import AuthHeader from '../components/AuthHeader'
class AuthContainer extends Component {
    constructor(props) {
        super(props)
    }

    componentWillMount() {
        const { isLoggedIn } = this.props
        if (isLoggedIn) {
            this.props.goToHome()
        }
    }

    render() {
        const { children } = this.props

        const divStyle = {
            textAlign: "center"
        }
        return (
            <div style={divStyle}>
                <AuthHeader {...this.props}/>
                {children}
            </div>
        )
    }

}

function mapStateToProps(state) {
    const { user: { isLoggedIn } } = state
    const { routing: { locationBeforeTransitions: { pathname } }} = state

    var activeTab

    if (pathname === '/signup') {
        activeTab = 'signup'
    } else if (pathname === '/login') {
        activeTab = 'login'
    }

    return {
        isLoggedIn,
        activeTab
    }
}

export default connect(
    mapStateToProps,
    { goToHome, goToLogin, goToSignup }
)(AuthContainer)