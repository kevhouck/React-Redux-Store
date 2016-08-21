var React = require('react');
var Navbar = require('react-bootstrap').Navbar;
var Nav = require('react-bootstrap').Nav;
var NavItem = require('react-bootstrap').NavItem;
var LinkContainer = require('react-router-bootstrap').LinkContainer;

var Header = React.createClass({
    render: function() {
        return (
            <div>
                <Navbar>
                    <Navbar.Header>
                        <Navbar.Brand>
                            Lexie's Cupcakes
                        </Navbar.Brand>
                        <Navbar.Toggle />
                    </Navbar.Header>
                    <Navbar.Collapse>
                        <Nav>
                            <LinkContainer to={{pathname :'/home' }}><NavItem eventKey={1}>Home</NavItem></LinkContainer>
                            <LinkContainer to={{pathname :'/blog' }}><NavItem eventKey={2}>Blog</NavItem></LinkContainer>
                            <LinkContainer to={{pathname :'/store' }}><NavItem eventKey={3}>Store</NavItem></LinkContainer>
                            <LinkContainer to={{pathname :'/about' }}><NavItem eventKey={4}>About</NavItem></LinkContainer>
                        </Nav>
                    </Navbar.Collapse>
                </Navbar>
            </div>
        )
    }
});

module.exports = Header;