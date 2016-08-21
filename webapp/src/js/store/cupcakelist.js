var React = require('react');
var Cupcake = require('./cupcake');

var CupcakeList = React.createClass({
    render: function () {
        var cupcakeNodes = this.props.cupcakes.map(function (cupcake) {
            return (
                <Cupcake key={cupcake._id} name={cupcake.name} description={cupcake.description} price={cupcake.price}/>
            )
        });

        var divStyle = {
            textAlign: "center"
        };
        return (
            <div style={divStyle}>
                {cupcakeNodes}
            </div>
        )
    }
});

module.exports = CupcakeList;