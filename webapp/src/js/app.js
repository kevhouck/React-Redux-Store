var React = require('react');
var ReactDOM = require('react-dom');
// cannot use bootstrap without polluting the global scope unfortunately
window.$ = window.jQuery = require('jquery');
require('bootstrap');

var App = React.createClass({
    render: function() {
        return <div className="store">Hellooooooooo React</div>
    }
});
ReactDOM.render(
    <App />,
    document.getElementById('container')
);