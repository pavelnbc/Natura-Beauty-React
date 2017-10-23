import React from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Grid, Row, Col, DropdownButton } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import SearchPlugin from './SearchPlugin';

function Toolbar({ user, onMenu, offMenu, getSearchValue, totalAmount, setContWithoutDisappear}) {
    var totalAmount = totalAmount.toFixed(2);

    return (
        <Navbar>
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} sm={3} md={3} lg={3}>
                        <Row className="show-grid">
                            <Col xs={2} sm={2} md={2} lg={2}>
                                <Navbar.Brand>
                                    <FontAwesome name="bars" size="2x" onClick={onMenu}/>
                                </Navbar.Brand>
                            </Col>
                            <Col xsHidden sm={10} md={10} lg={10}>
                                <Navbar.Brand>
                                    <NavLink className="header-title" onClick={offMenu} to="/">Natural Beauty</NavLink>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={8} sm={6} md={3} lg={3} lgOffset={1} mdOffset={1}>
                        <SearchPlugin getSearchedMed={getSearchValue}/>
                    </Col>
                    <Col xsHidden smHidden md={6} lg={5}>
                        <Nav>
                            <NavItem className="navItem">
                                <NavLink to="/products" onClick={offMenu}>Our Products</NavLink>
                            </NavItem>
                            <NavItem className="navItem"
                                     href="https://www.usps.com/"
                                     target="_blank" rel="noopener noreferrer"
                                     title="USPS.com"
                                     onClick={offMenu}
                            >
                                Order status
                            </NavItem>
                            <NavItem className="navItem">
                                <NavLink to="/about" onClick={offMenu}>About us</NavLink>
                            </NavItem>
                            <NavItem>
                                <div className="total">{totalAmount}</div>
                            </NavItem>
                            <NavItem className="navItem cart-icon">
                                <NavLink  to="/cart" onClick={offMenu}>
                                    <img src="/img/cart.png" />
                                </NavLink>
                            </NavItem>
                        </Nav>
                    </Col>
                    <Col className="shotNav"  xs={2} sm={3} mdHidden lgHidden>
                      <DropdownButton pullRight bsStyle={'default'}
                                      title=""
                                      id="toolbar-dropdown"
                                      bsSize="sm"
                                      onClick={() => { setContWithoutDisappear(); offMenu() }}
                      >
                          <MenuItem className="navItem" eventKey="1">
                            <NavLink to="/products">Our Products</NavLink>
                          </MenuItem>
                          <MenuItem title="USPS.com"
                                    eventKey="2"
                                    className="navItem"
                                    href="https://www.usps.com/"
                                    target="_blank"
                                    rel="noopener noreferrer"
                          >
                              <a>Order status</a>
                          </MenuItem>
                          <MenuItem className="navItem" eventKey="5">
                              <a href="#">{totalAmount}</a>
                          </MenuItem>
                          <MenuItem className="navItem" eventKey="6">
                              <NavLink  to="/cart">
                                  Cart
                              </NavLink>
                          </MenuItem>
                      </DropdownButton>
                    </Col>
                </Row>
            </Grid>
        </Navbar>
    )
}

export default Toolbar