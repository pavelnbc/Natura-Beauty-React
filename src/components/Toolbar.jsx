import React from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ListGroup, ListGroupItem } from 'react-bootstrap';




function Toolbar({ user, onMenu, offMenu }) {
    return (
        <Navbar>
            <Navbar.Header>
                <Navbar.Brand>
                    <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={onMenu}></i>
                </Navbar.Brand>
                <Navbar.Brand>
                    <NavLink className="header-title" onClick={offMenu} to="/">Natural Beauty</NavLink>
                </Navbar.Brand>
            </Navbar.Header>
            <Nav pullRight={true} onClick={offMenu}>
                <NavItem>
                    <NavLink className="navItem" to="/products">Our Products</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navItem" to="/about">About Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navItem" to="/contact">Contact Us</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink className="navItem" to="/policies">Our Policies</NavLink>
                </NavItem>
                <NavDropdown title="Enter" id="basic-nav-dropdown">
                    <MenuItem>
                        {user ?
                            <NavLink className="dropdown-item" to="/logout">Log out</NavLink>
                            :
                            <NavLink className="dropdown-item" to="/login">Log in</NavLink>}
                    </MenuItem>
                    <MenuItem>
                        <NavLink className="dropdown-item" /*activeClassName="activeTab" */ to="/logout">Sign up</NavLink>
                    </MenuItem>
                </NavDropdown>
            </Nav>
        </Navbar>
    )
}

Toolbar.propTypes = {
    user: React.PropTypes.object,
    onMenu: React.PropTypes.func.isRequired
};

export default Toolbar