var React = require('react');
var Grid = require('react-bootstrap').Grid;
var Row = require('react-bootstrap').Row;
var Col = require('react-bootstrap').Col;

var PageHeader = require('react-bootstrap').PageHeader;

var Home = React.createClass({
    render: function () {
        return (
            <div>
                <Grid>
                    <Row>
                        <Col>
                            <PageHeader>Lexie's Cupcakes <small>Mmmmmmmmmmm</small></PageHeader>
                            <div>
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