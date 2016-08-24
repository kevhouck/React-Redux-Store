import React, { Component, PropTypes } from 'react'
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
var banner = require('../assets/banner.jpg')
import { goToHome, goToBlog, goToStore, goToAbout} from '../actions'

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

        return (
            <div>
                <div style={divStyle}>
                    <img style={imgStyle} src={banner}/>
                </div>
                <Tabs>
                    <Tab label={"Home"} onActive={ this.props.goToHome }/>
                    <Tab label={"Blog"} onActive={ this.props.goToBlog }/>
                    <Tab label={"Store"} onActive={ this.props.goToStore }/>
                    <Tab label={"About"} onActive={ this.props.goToAbout }/>
                </Tabs>
            </div>
        )
    }
}

function mapStateToProps(state) {
    return {}
}

function mapDispatchToProps(dispatch) {
    return bindActionCreators({goToHome, goToBlog, goToStore, goToAbout}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)