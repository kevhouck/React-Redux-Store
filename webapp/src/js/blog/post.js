var React = require('react');
var Markdown = require('react-markdown');

var Post = React.createClass({
    render: function () {
        var divStyle = {
            display: "block",
            marginTop: 50,
            padding: 25,
            overflow: "auto",
            backgroundColor: "#e6e6e6",
            borderRadius: 10
        };

        var titleStyle = {
            display: "inline"
        };

        var dateStyle = {
            display: "inline",
            float: "right",
        };

        var contentStyle = {
            padding: 10,
            paddingTop: 25,
            borderRadius: 25,
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
                <div style={contentStyle}><Markdown source={this.props.content}/></div>
            </div>
        )
    }
});

module.exports = Post;
