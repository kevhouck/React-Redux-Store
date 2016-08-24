import React, { Component, PropTypes } from 'react'
import {Tabs, Tab} from 'material-ui/Tabs';

export default function ({activeTab, goToSignup, goToLogin}) {

    return(
        <Tabs value={activeTab}>
            <Tab label={"Login"} value="login" onActive={ goToLogin }/>
            <Tab label={"Signup"} value="signup" onActive={ goToSignup }/>
        </Tabs>
    )
}