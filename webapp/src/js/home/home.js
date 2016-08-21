var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var PageHeader = require('react-bootstrap').PageHeader;

var Home = React.createClass({
    render: function () {
        var divStyle = {
            textAlign: "center"
        };

        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <div style={divStyle}>
                                <PageHeader>Lexie's Cupcakes <small>Mmmmmmmmmmm</small></PageHeader>
                                <p>asdf asdfasdf asd fasdf a f a a ds as dfadf adfasdfasdf adfasdf asdasdf</p>
                                <img src="http://www.browneyedbaker.com/wp-content/uploads/2010/11/red-velvet-cupcakes-32-600.jpg" width={600} height={400}/>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </div>
        )
    }
});

module.exports = Home;