import React, { Component } from 'react';
import { NavLink} from 'react-router-dom';
import { Navbar, Nav, MenuItem, Grid, Row, Col, DropdownButton, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

import SearchPlugin from './SearchPlugin';

// import categories from '../../api/categories.json'

function Toolbar({ match, onMenu, getSearchValue, totalAmount, setContWithoutDisappear, toEmptySearch, productAmount, categories }) {
    totalAmount = totalAmount.toFixed(2);

    let toolbarClassName = classNames({
        toolbar: true,
        "folded-toolbar": match.params.pages
    });

    return (
        <Navbar className={toolbarClassName}>
            <Grid>
                <Row className="show-grid">
                    <Col xs={2} sm={4} md={3} lg={3}>
                        <Row className="show-grid">
                            <Col xs={2} sm={2} md={2} lg={2}>
                                <Navbar.Brand>
                                    <FontAwesome name="bars" size="2x" onClick={onMenu}/>
                                </Navbar.Brand>
                            </Col>
                            <Col xsHidden sm={10} md={10} lg={10}>
                                <Navbar.Brand>
                                    <NavLink className="header-title"
                                             name="top"
                                             onClick={toEmptySearch}
                                             to="/"
                                    >
                                        Natural Beauty
                                    </NavLink>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={8} sm={5} md={3} lg={3} lgOffset={1}>
                        <SearchPlugin getSearchedMed={getSearchValue}/>
                    </Col>
                    <Col xsHidden smHidden md={6} lg={5}>
                        <Nav onClick={toEmptySearch}>
                            <li className="navItem">
                                <NavLink activeClassName="active-link" to="/products">Our Products</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink activeClassName="active-link" to="/about">About us</NavLink>
                            </li>
                            <li className="navItem">
                                <a className="navItem"
                                   href="https://www.usps.com/"
                                   target="_blank" rel="noopener noreferrer"
                                   title="USPS.com"
                                >
                                    Order status
                                </a>
                            </li>
                            <li className="navItem total" onClick={setContWithoutDisappear}>
                                <a>{totalAmount}</a>
                            </li>
                            <li className="navItem cart-icon">
                                <NavLink activeClassName="active-link" to="/cart">
                                    <span className="product-amount">{productAmount ? productAmount : null}</span>
                                    <img src="/img/cart.png" />
                                </NavLink>
                            </li>
                        </Nav>
                    </Col>
                    <Col className="shotNav"  xs={2} sm={3} mdHidden lgHidden>
                        <DropdownButton pullRight bsStyle={'default'}
                                        title=""
                                        id="toolbar-dropdown"
                                        bsSize="sm"
                                        onClick={setContWithoutDisappear}
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
                              <FontAwesome name="caret-down"/>
                              <a>Categories</a>
                              <ListGroup className="shotNav-categories">
                                  {categories.map((category, index) => {
                                    return (
                                      <NavLink key={index}
                                        to={`/products/${category.id}`}
                                        className="menuItem"
                                        onClick={toEmptySearch}
                                      >
                                        <ListGroupItem>
                                          <FontAwesome name="heartbeat" />
                                          {category.title}
                                        </ListGroupItem>
                                      </NavLink>
                                    );
                                  })}
                              </ListGroup>
                            </MenuItem>
                            <MenuItem className="navItem shot-total" eventKey="6">
                                <a href="#">{totalAmount}</a>
                            </MenuItem>
                            <MenuItem className="navItem" eventKey="7">
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