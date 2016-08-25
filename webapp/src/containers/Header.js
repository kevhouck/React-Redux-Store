import React, { Component, PropTypes } from 'react'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
var banner = require('../assets/banner.jpg')
import { goToLogin, logout} from '../actions'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
import IconMenu from 'material-ui/IconMenu';
import MenuItem from 'material-ui/MenuItem';
class Header extends Component {
    constructor(props) {
        super(props)
    }

    render () {
        const divStyle = {
            height: 400
        }

        const imgStyle = {
            height: 400,
            width: "100%"
        }

        const { isLoggedIn, userObj } = this.props

        var appBarIconMenuNode = null

        if (isLoggedIn) {
            appBarIconMenuNode = (
                <IconMenu
                    iconButtonElement={
                        <IconButton><ListIcon/></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem primaryText={'Hello, ' + userObj.firstName} />
                    <MenuItem primaryText="Cart" />
                    <MenuItem onClick={this.props.logout.bind(this)} primaryText="Logout" />
                </IconMenu>
            )
        } else {
            appBarIconMenuNode = (
                <IconMenu
                    iconButtonElement={
                        <IconButton><ListIcon/></IconButton>
                    }
                    targetOrigin={{horizontal: 'right', vertical: 'top'}}
                    anchorOrigin={{horizontal: 'right', vertical: 'top'}}>
                    <MenuItem onClick={this.props.goToLogin.bind(this)} primaryText="Login/Signup" />
                    <MenuItem primaryText="Cart" />
                </IconMenu>
            )
        }
        return (
            <div>
                <AppBar title="Lexie's Cupcakes" showMenuIconButton={false} iconElementRight={appBarIconMenuNode}/>
                <div style={divStyle}>
                    <img style={imgStyle} src={banner}/>
                </div>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const {
        user: { isLoggedIn, user },
        entities: { users }
    } = state

    var userObj = null

    if (isLoggedIn) {
        userObj = users[user]
    }

    return {
        isLoggedIn,
        userObj
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({goToLogin, logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)