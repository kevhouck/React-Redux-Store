var React = require('react');
var ReactDOM = require('react-dom');
var ReactRouter = require('react-router');
var Router = ReactRouter.Router;
var Route = ReactRouter.Route;
var IndexRedirect = ReactRouter.IndexRedirect;
var browserHistory = ReactRouter.browserHistory;
var Redirect = ReactRouter.Redirect;

// components
var App = require('./app/app');
var Home = require('./home/home');
var Blog = require('./blog/blog');
var Store = require('./store/store');
var About = require('./about/about');

ReactDOM.render(
    (
        <Router history={browserHistory}>
            <Route path="/" component={App}>
                <IndexRedirect to="/home" />
                <Route path="home" component={Home} />
                <Route path="blog" component={Blog} />
                <Route path="store" component={Store} />
                <Route path="about" component={About} />
                <Redirect from="*" to ="/home" component={Home}/>
            </Route>
        </Router>
    ),
    document.getElementById('container')
);