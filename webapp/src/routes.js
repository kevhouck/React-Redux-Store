import React from 'react'
import { Route } from 'react-router'
import App from './components/App'
import VisiblePostsList from './containers/VisiblePostsList'

export default (
    <Route path="/" component={App}>
        <Route path="blog" component={VisiblePostsList}/>
    </Route>
)
