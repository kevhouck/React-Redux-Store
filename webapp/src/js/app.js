var React = require('react');

var App = React.createClass({
    render: function() {
        return (
            <div>
                <div>App</div>
                {this.props.children}
            </div>
        )
    }
});

module.exports = App;