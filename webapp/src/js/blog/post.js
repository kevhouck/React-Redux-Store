var React = require('react');

var Post = React.createClass({
    render: function () {
        return(
            <div>
                <p>{this.props.author}</p>
                <p>{this.props.content}</p>
            </div>
        )
    }
});

module.exports = Post;
