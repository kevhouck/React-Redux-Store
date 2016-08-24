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
    <Route path="/">
        <IndexRoute component={App} children={Home}/>
        <Route path="blog" component={App}>
                <IndexRoute component={Blog} children={VisiblePostsList}/>
                <Route path=":post" component={Blog}  children={VisiblePostDetail}/>
        </Route>
        <Route path="store" component={App}>
            <IndexRoute component={Store} children={VisibleItemsList}/>
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
