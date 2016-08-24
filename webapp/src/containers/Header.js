import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
var banner = require('../assets/banner.jpg')
import { goToHome, goToBlog, goToStore, goToLogin, logout} from '../actions'
import _ from 'lodash'
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

        const tabsStyle = {

        }

        const { isLoggedIn, userObj, activeTab} = this.props

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
                <Tabs style={tabsStyle} value={activeTab}>
                    <Tab label={"Home"} value="home" onActive={ this.props.goToHome }/>
                    <Tab label={"Blog"} value="blog" onActive={ this.props.goToBlog }/>
                    <Tab label={"Store"} value="store" onActive={ this.props.goToStore }/>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state) {

    const {
        routing: { locationBeforeTransitions: { pathname } },
        user: { isLoggedIn, user },
        entities: { users }
    } = state
    var activeTab

    if (pathname === '/') {
        activeTab = 'home'
    } else if (_.startsWith(pathname, '/blog')) {
        activeTab = 'blog'
    } else if (_.startsWith(pathname, '/store')) {
        activeTab = 'store'
    }

    var userObj = null

    if (isLoggedIn) {
        userObj = users[user]
    }

    return {
        activeTab,
        isLoggedIn,
        userObj
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({goToHome, goToBlog, goToStore, goToLogin, logout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)