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
                    </Navbar.Header>
                    <Nav>
                        <LinkContainer to={{pathname :'/home' }}><NavItem>Home</NavItem></LinkContainer>
                        <LinkContainer to={{pathname :'/blog' }}><NavItem>Blog</NavItem></LinkContainer>
                        <LinkContainer to={{pathname :'/store' }}><NavItem>Store</NavItem></LinkContainer>
                        <LinkContainer to={{pathname :'/about' }}><NavItem>About</NavItem></LinkContainer>
                    </Nav>
                </Navbar>
            </div>
        )
    }
});

module.exports = Header;