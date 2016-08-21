var React = require('react');
var Post = require('./post');

var PostList = React.createClass({
    render: function () {
        var postNodes = this.props.posts.map(function (post) {
            return (
                <Post key={post._id} author={post.title} content={post.content} submittedOn={post.submittedOn}/>
            )
        });
        return (
            <div>
                {postNodes}
            </div>
        )
    }
});

module.exports = PostList;