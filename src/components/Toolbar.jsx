import React from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, DropdownButton } from 'react-bootstrap';

import SearchPlugin from './SearchPlugin';

function Toolbar({ user, onMenu, offMenu, handleVision, searchValueToToolbar, onSearchToToolbar}) {
    return (
        <Navbar>
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} sm={3} md={3} lg={3}>
                        <Row className="show-grid">
                            <Col xs={2} sm={2} md={2} lg={2}>
                                <Navbar.Brand>
                                    <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={onMenu}></i>
                                </Navbar.Brand>
                            </Col>
                            <Col xsHidden sm={10} md={10} lg={10}>
                                <Navbar.Brand>
                                    <NavLink className="header-title" onClick={offMenu} to="/">Natural Beauty</NavLink>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={8} sm={6} md={3} lg={3} lgOffset={1}>
                        <SearchPlugin searchValueToPlg={searchValueToToolbar} onSearchToPlg={onSearchToToolbar}/>
                    </Col>
                    <Col xsHidden smHidden md={6} lg={5}>
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
                            <NavDropdown className="navItem" title="Enter" id="enter-dropdown">
                                <MenuItem>
                                    {user
                                        ? <NavLink className="dropdown-item" to="/logout">Log out</NavLink>
                                        : <NavLink className="dropdown-item" to="/login">Log in</NavLink>}
                                </MenuItem>
                                <MenuItem>
                                    <NavLink className="dropdown-item" /*activeClassName="activeTab" */ to="/logout">Sign up</NavLink>
                                </MenuItem>
                            </NavDropdown>
                        </Nav>
                    </Col>
                    <Col className="shotNav"  xs={2} sm={3} mdHidden lgHidden>
                      <DropdownButton pullRight bsStyle={'default'}
                                      title=""
                                      id="toolbar-dropdown"
                                      bsSize="sm"
                      >
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

export default Toolbar