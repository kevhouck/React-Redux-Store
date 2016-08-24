import React, { Component, PropTypes } from 'react'
import { login } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            emailAddress: '',
            password: ''
        }
    }

    render() {
        const paperStyle = {
            margin: 100,
            padding: 100,
            height: 400,
            width: 800,
            display: 'inline-block',
        }

        const buttonStyle = {
            margin: 50,
        }

        return(
            <Paper style={paperStyle}>
                <TextField hintText="Email Address" onChange={this.onEmailChange.bind(this)} value={this.state.emailAddress}/>
                <br />
                <br />
                <TextField hintText="Password" onChange={this.onPasswordChange.bind(this)} value={this.state.password}/>
                <br />
                <RaisedButton label="Login" style={buttonStyle} onClick={this.handleButtonClick.bind(this)}/>
            </Paper>
        )
    }

    onEmailChange(e) {
        this.setState({
            emailAddress: e.target.value
        })
    }

    onPasswordChange(e) {
        this.setState({
            password: e.target.value
        })
    }

    handleButtonClick(e) {
        this.props.login(this.state)
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ login }, dispatch)
}

function mapStateToProps() {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Login)

