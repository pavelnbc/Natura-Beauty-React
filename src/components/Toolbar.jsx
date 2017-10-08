import React from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, ListGroup, ListGroupItem, Grid, Row, Col, DropdownButton } from 'react-bootstrap';

function Toolbar({ user, onMenu, offMenu, isMenuOpened, handleVision}) {
    return (
        <Navbar>
            <Grid>
                <Row className="show-grid">
                    <Col xs={10} sm={4} md={3} lg={3}>
                        <Navbar.Header>
                            <Navbar.Brand>
                                <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={onMenu}></i>
                            </Navbar.Brand>
                            <Navbar.Brand>
                                <NavLink className="header-title" onClick={offMenu} to="/">Natural Beauty</NavLink>
                            </Navbar.Brand>
                        </Navbar.Header>
                    </Col>
                    <Col xsHidden sm={8} md={9} lg={9}>
                        <Nav pullRight={true} onClick={offMenu}>
                            <NavItem>
                                <NavLink className="navItem" to="/products" onClick={handleVision}>Our Products</NavLink>
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
                    </Col>
                    <Col className="shotNav"  xs={2} smHidden mdHidden lgHidden>
                      <DropdownButton pullRight bsStyle={'default'} title={'info'}>
                        <MenuItem eventKey="1">
                          <NavLink className="navItem" to="/products" onClick={handleVision}>Our Products</NavLink>
                        </MenuItem>
                        <MenuItem eventKey="2">
                          <NavLink className="navItem" to="/about">About Us</NavLink>
                        </MenuItem>
                        <MenuItem eventKey="3">
                          <NavLink className="navItem" to="/contact">Contact Us</NavLink>
                        </MenuItem>
                        <MenuItem eventKey="4">
                          <NavLink className="navItem" to="/policies">Our Policies</NavLink>
                        </MenuItem>
                        <MenuItem eventKey="5">
                          {user ?
                            <NavLink className="dropdown-item" to="/logout">Log out</NavLink>
                            :
                            <NavLink className="dropdown-item" to="/login">Log in</NavLink>}
                        </MenuItem>
                        <MenuItem eventKey="6">
                          <NavLink className="dropdown-item" /*activeClassName="activeTab" */ to="/logout">Sign up</NavLink>
                        </MenuItem>
                      </DropdownButton>
                    </Col>
                </Row>
            </Grid>
        </Navbar>
    )
}

Toolbar.propTypes = {
    user: React.PropTypes.object,
    onMenu: React.PropTypes.func.isRequired,
    offMenu: React.PropTypes.func.isRequired
};

export default Toolbar