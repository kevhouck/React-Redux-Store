import React from 'react'
import { Route, IndexRoute, Redirect } from 'react-router'
import App from './components/App'
import Blog from './components/Blog'
import Home from './components/Home'
import Store from './components/Store'
import VisiblePostsList from './containers/VisiblePostsList'
import VisiblePostDetail from './containers/VisiblePostDetail'
import VisibleItemsList from './containers/VisibleItemsList'
import AuthContainer from './containers/AuthContainer'
import SignupContainer from './containers/Signup'
import Login from './containers/Login'

export default (
    <Route path="/" component={App}>
        <IndexRoute component={Home}/>
        <Route path="blog" component={Blog}>
                <IndexRoute component={VisiblePostsList}/>
                <Route path=":post" component={VisiblePostDetail}/>
        </Route>
        <Route path="store" component={Store}>
            <IndexRoute component={VisibleItemsList}/>
        </Route>
        <Route path="signup" component={AuthContainer}>
            <IndexRoute component={SignupContainer}/>
        </Route>
        <Route path="login" component={AuthContainer}>
            <IndexRoute component={Login}/>
        </Route>
        <Redirect from="*" to="/"/>
    </Route>
)
