var React = require('react');

var Cupcake = React.createClass({
    render: function () {
        var divStyle = {
            display: "inline-block",
            width: 300,
            height: 300,
            marginTop: 60,
            marginBottom: 60,
            marginLeft: 30,
            marginRight: 30,
            backgroundColor: "#e6e6e6",
            borderRadius: 10,
            textAlign: "center",
        };

        var nameStyle = {
            marginTop: 10,
            fontSize: 20
        };

        var descriptionStyle = {
            margin: 10
        };

        var priceStyle = {
            margin: 25
        };

        return(
            <div style={divStyle}>
                <div style={nameStyle}>{this.props.name}</div>
                <div style={descriptionStyle}>{this.props.description}</div>
                <img src="http://67.media.tumblr.com/tumblr_m1rigcGdE61r8yiss.jpg" width={100} height={150}/>
                <div style={priceStyle}>{this.props.price}</div>
            </div>
        )
    }
});

module.exports = Cupcake;