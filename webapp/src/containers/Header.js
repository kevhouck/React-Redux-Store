import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
var banner = require('../assets/banner.jpg')
import { goToHome, goToBlog, goToStore, goToAbout} from '../actions'
import _ from 'lodash'
import AppBar from 'material-ui/AppBar';
import IconButton from 'material-ui/IconButton';
import ListIcon from 'material-ui/svg-icons/action/list';
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

        const { activeTab } = this.props
        return (
            <div>
                <AppBar title="Lexie's Cupcakes" showMenuIconButton={false} iconElementRight={
                    <IconButton><ListIcon/></IconButton>
                }/>

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

    const { routing: { locationBeforeTransitions: { pathname } }} = state
    var activeTab

    if (pathname === '/') {
        activeTab = 'home'
    } else if (_.startsWith(pathname, '/blog')) {
        activeTab = 'blog'
    } else if (_.startsWith(pathname, '/store')) {
        activeTab = 'store'
    }

    return {
        activeTab
    }
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({goToHome, goToBlog, goToStore, goToAbout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)