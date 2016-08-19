var React = require('react');
var ReactDOM = require('react-dom');
// cannot use bootstrap without polluting the global scope unfortunately
window.$ = window.jQuery = require('jquery');
require('bootstrap');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRoute = ReactRouter.IndexRoute;
var browserHistory = ReactRouter.browserHistory;
var Redirect = ReactRouter.Redirect;

// components
var App = require('./app');
var Home = require('./home/home');
var Blog = require('./blog/blog');
var Store = require('./store/store');
var About = require('./about/about');

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="blog" component={Blog} />
                <Route path="store" component={Store} />
                <Route path="about" component={About} />
                <Redirect from="*" to ="/" component={Home}/>
            </Route>
        </Router>
    ),
    document.getElementById('container')
);