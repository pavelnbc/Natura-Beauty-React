import React from 'react';
import { NavLink} from 'react-router-dom';
// import {    MenuItem, DropdownButton, ListGroup, ListGroupItem } from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import SearchPluginContainer from '../containers/SearchPluginContainer';

function Toolbar({ match, categories, totalPrice, itemAmount, onMenu, setEmptySearch }) {
    totalPrice = totalPrice.toFixed(2);

    let toolbarClassName = classNames({
        header: true,
        "folded-header": match.params.pages
    });

    let dropdownList = document.getElementById("dropdown-list");

    function setDropDownMenu() {
        dropdownList.classList.toggle('unfolded');
    }

    function setDropdownHidden() {
        dropdownList.classList.toggle('dropdown-is-hidden');
    }

    return (
        <header className={toolbarClassName}>
            <div className="grid">
                <div className="row">
                    <div>
                        <div className="col-xs-2 col-sm-4 col-md-3 col-lg-3">
                            <div className="header__left">
                                <span className=" header__title">
                                    <div className="header__menu" onClick={onMenu}>
                                        <div></div>
                                        <div></div>
                                        <div></div>
                                    </div>
                                    <NavLink  className="xsHidden"
                                              name="top"
                                              onClick={setEmptySearch}
                                              to="/"
                                    >
                                        Natural Beauty
                                    </NavLink>
                                </span>
                            </div>
                        </div>
                        <div className="col-xs-8 col-sm-6 col-md-3 col-lg-3">
                            <SearchPluginContainer />
                        </div>
                        <div className="header__navigation xsHidden smHidden col-md-6 col-lg-6">
                            <nav onClick={setEmptySearch} className="header__nav-bar">
                                <ul>
                                    <li className="header__navItem">
                                        <NavLink  to="/products">Our Products</NavLink>
                                    </li>
                                    <li className="header__navItem">
                                        <NavLink  to="/about">About us</NavLink>
                                    </li>
                                    <li className="header__navItem">
                                        <a className="navItem"
                                           href="https://www.usps.com/"
                                           target="_blank" rel="noopener noreferrer"
                                           title="USPS.com"
                                        >
                                            Order status
                                        </a>
                                    </li>
                                    <li className="header__total header__navItem">
                                        <a>{totalPrice}</a>
                                    </li>
                                    <li className="header__navItem cart-icon">
                                        <NavLink to="/cart">
                                            <span className="header__product-amount">{itemAmount}</span>
                                            <img src="/img/cart.png" alt="cart"/>
                                        </NavLink>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="col-xs-2 col-sm-2 mdHidden lgHidden">
                            <div className="header__dropdown-menu">
                                <div className="header__dropdown-icon" onClick={setDropDownMenu}>
                                    <div className="header__dropdown-icon-triangle"></div>
                                </div>
                                <ul className="header__dropdown-list" id="dropdown-list" onClick={setDropDownMenu}>
                                    <li>
                                        <NavLink className="header__dropdown-listIcon" to="/">Home</NavLink>
                                    </li>
                                    <li>
                                        <NavLink className="header__dropdown-listIcon" to="/products">Our Products</NavLink>
                                    </li>
                                    <li>
                                        <a href="https://tools.usps.com/go/TrackConfirmAction_input"
                                           target="_blank"
                                           title="USPS.com"
                                           className="header__dropdown-listIcon"
                                        >
                                            Order Status
                                        </a>
                                    </li>
                                    <li>
                                        <NavLink className="header__dropdown-listIcon" to="/about">About Us</NavLink>
                                    </li>
                                    <li className="header__dropdown-listIcon" onMouseOver={setDropdownHidden} onMouseOut={setDropdownHidden}>
                                        Categories
                                        <ul className="header__dropdown-categories">
                                            {categories.map((category, index) => {
                                                return (
                                                    <li key={index} className="header__dropdown-category">
                                                        <NavLink to={`/products/${category.id}`}>
                                                            {category.title}
                                                        </NavLink>
                                                    </li>
                                                )
                                            })}
                                        </ul>
                                    </li>
                                    <li className="header__dropdown-listIcon total-price">{totalPrice}</li>
                                    <li>
                                        <NavLink className="header__dropdown-listIcon" to="/cart">Cart</NavLink>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

/*<DropdownButton pullRight bsStyle={'default'}
                                            title=""
                                            id="toolbar-dropdown"
                                            bsSize="sm"
                            >
                                <MenuItem className="header__navItem" eventKey="1">
                                    <NavLink to="/products">Our Products</NavLink>
                                </MenuItem>
                                <MenuItem  className="header__navItem" eventKey="2">
                                    <NavLink to="/about">About us</NavLink>
                                </MenuItem>
                                <MenuItem title="USPS.com"
                                          eventKey="3"
                                          className="header__navItem"
                                          href="https://www.usps.com/"
                                          target="_blank"
                                          rel="noopener noreferrer"
                                >
                                    <a>Order status</a>
                                </MenuItem>
                                <MenuItem className="header__navItem" eventKey="4">
                                    <FontAwesome name="caret-down"/>
                                    <a>Categories</a>
                                    <ListGroup className="header__shotNav-categories">
                                        {categories.map((category, index) => {
                                            return (
                                                <NavLink key={index}
                                                         to={`/products/${category.id}`}
                                                         className="header__menuItem"
                                                         onClick={setEmptySearch}
                                                >
                                                    <ListGroupItem>
                                                        <FontAwesome name="header__heartbeat" />
                                                        {category.title}
                                                    </ListGroupItem>
                                                </NavLink>
                                            );
                                        })}
                                    </ListGroup>
                                </MenuItem>
                                <MenuItem className="header__navItem header__shot-total" eventKey="5">
                                    <a>{totalPrice}</a>
                                </MenuItem>
                                <MenuItem className="header__navItem" eventKey="6">
                                    <NavLink  to="/cart">
                                        Cart
                                    </NavLink>
                                </MenuItem>
                            </DropdownButton>*/

/*<Navbar className={toolbarClassName}>
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
                                             onClick={setEmptySearch}
                                             to="/"
                                    >
                                        Natural Beauty
                                    </NavLink>
                                </Navbar.Brand>
                            </Col>
                        </Row>
                    </Col>
                    <Col xs={8} sm={5} md={3} lg={3} lgOffset={1}>
                        <SearchPluginContainer />
                    </Col>
                    <Col xsHidden smHidden md={6} lg={5}>
                        <Nav onClick={setEmptySearch}>
                            <li className="navItem">
                                <NavLink  to="/products">Our Products</NavLink>
                            </li>
                            <li className="navItem">
                                <NavLink  to="/about">About us</NavLink>
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
                            <li className="navItem excluding">
                                <a className="total">{totalPrice}</a>
                            </li>
                            <li className="navItem cart-icon">
                                <NavLink to="/cart">
                                    <span className="product-amount">{itemAmount}</span>
                                    <img src="/img/cart.png" alt="cart"/>
                                </NavLink>
                            </li>
                        </Nav>
                    </Col>
                    <Col className="shotNav"  xs={2} sm={3} mdHidden lgHidden>
                        <DropdownButton pullRight bsStyle={'default'}
                                        title=""
                                        id="toolbar-dropdown"
                                        bsSize="sm"
                        >
                            <MenuItem className="navItem" eventKey="1">
                                <NavLink to="/products">Our Products</NavLink>
                            </MenuItem>
                            <MenuItem  className="navItem" eventKey="2">
                                <NavLink to="/about">About us</NavLink>
                            </MenuItem>
                            <MenuItem title="USPS.com"
                                      eventKey="3"
                                      className="navItem"
                                      href="https://www.usps.com/"
                                      target="_blank"
                                      rel="noopener noreferrer"
                            >
                                <a>Order status</a>
                            </MenuItem>
                            <MenuItem className="navItem" eventKey="4">
                                <FontAwesome name="caret-down"/>
                                <a>Categories</a>
                                <ListGroup className="shotNav-categories">
                                    {categories.map((category, index) => {
                                        return (
                                            <NavLink key={index}
                                                     to={`/products/${category.id}`}
                                                     className="menuItem"
                                                     onClick={setEmptySearch}
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
                            <MenuItem className="navItem shot-total" eventKey="5">
                                <a>{totalPrice}</a>
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
        </Navbar>*/

Toolbar.propTypes = {
    match: PropTypes.object,
    categories: PropTypes.array,
    totalPrice: PropTypes.number,
    totalAmount: PropTypes.object || PropTypes.number,
    onMenu: PropTypes.func,
    setEmptySearch: PropTypes.func
};

export default Toolbar