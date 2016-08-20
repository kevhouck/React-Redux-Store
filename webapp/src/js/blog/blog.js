var React = require('react');
var axios = require('../util/http_client');
var PostList = require('./postlist');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var Blog = React.createClass({
    render: function () {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <PostList posts={this.state.posts}/>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    },
    componentDidMount: function () {
        this.loadPostsFromServer();
    },
    loadPostsFromServer: function () {
        axios.get('/api/post')
            .then(function (res) {
                console.log('fetched posts');
                this.setState({posts: res.data});
            }.bind(this)).catch(function (err) {
                console.log(err)
            })
    },
    getInitialState: function () {
        return {
            posts: []
        }
    }
});

module.exports = Blog;