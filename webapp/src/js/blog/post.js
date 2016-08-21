var React = require('react');
var Markdown = require('react-markdown');

var Post = React.createClass({
    render: function () {
        var divStyle = {
            display: "block",
            margin: 50,
            overflow: "auto"
        };

        var titleStyle = {
            display: "inline"
        };

        var dateStyle = {
            display: "inline",
            float: "right",
            margin: "0 50 50 50"
        };

        var date = new Date(this.props.submittedOn);
        var monthNames = [
            "January", "February", "March",
            "April", "May", "June", "July",
            "August", "September", "October",
            "November", "December"
        ];

        var day = date.getDate();
        var monthIndex = date.getMonth();
        var year = date.getFullYear();

        var prettyDate = day + " " + monthNames[monthIndex] + ", "+ year;

        return(
            <div style={divStyle}>
                <div><h3 style={titleStyle}>{this.props.author}</h3><p style={dateStyle}>Posted on {prettyDate}</p></div>
                <Markdown source={this.props.content}/>
            </div>
        )
    }
});

module.exports = Post;
