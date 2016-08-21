var React = require('react');
var axios = require('../util/http_client');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;
var CupcakeList = require('./cupcakelist');

var Store = React.createClass({
    render: function () {
        return (
        <div>
            <Grid>
                <Row>
                    <Col>
                        <CupcakeList cupcakes={this.state.cupcakes} />
                    </Col>
                </Row>
            </Grid>
        </div>
        )
    },
    componentDidMount: function () {
        this.loadCupcakesFromServer();
    },
    loadCupcakesFromServer: function () {
        axios.get('/api/cupcake')
            .then(function (res) {
                console.log('fetched cupcakes');
                this.setState({cupcakes: res.data});
            }.bind(this)).catch(function (err) {
            console.log(err)
        })
    },
    getInitialState: function () {
        return {
            cupcakes: []
        }
    }
});

module.exports = Store;