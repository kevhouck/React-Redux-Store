import React, { Component, PropTypes } from 'react'
import { signup } from '../actions'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import Paper from 'material-ui/Paper';
import TextField from 'material-ui/TextField';
import RaisedButton from 'material-ui/RaisedButton';

class Signup extends Component {
    constructor(props) {
        super(props)

        this.state = {
            firstName: '',
            lastName: '',
            emailAddress: '',
            password: ''
        }
    }

    render() {
        const paperStyle = {
            margin: 100,
            padding: 100,
            height: 500,
            width: 800,
            display: 'inline-block',
        }

        const buttonStyle = {
            margin: 50,
        }

        return(
            <Paper style={paperStyle}>
                <TextField hintText="First Name" onChange={this.onFirstNameChange.bind(this)} value={this.state.firstName}/>
                <br />
                <br />
                <TextField hintText="Last Name" onChange={this.onLastNameChange.bind(this)} value={this.state.lastName}/>
                <br />
                <br />
                <TextField hintText="Email Address" onChange={this.onEmailChange.bind(this)} value={this.state.emailAddress}/>
                <br />
                <br />
                <TextField hintText="Password" onChange={this.onPasswordChange.bind(this)} value={this.state.password}/>
                <br />
                <RaisedButton label="Signup" style={buttonStyle} onClick={this.handleButtonClick.bind(this)}/>
            </Paper>
        )
    }

    onFirstNameChange(e) {
        this.setState({
            firstName: e.target.value
        })
    }

    onLastNameChange(e) {
        this.setState({
            lastName: e.target.value
        })
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
        this.props.signup(this.state)
    }

}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({ signup }, dispatch)
}

function mapStateToProps() {
    return {}
}

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Signup)

