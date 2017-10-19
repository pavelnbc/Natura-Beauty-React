import React from 'react';
import { NavLink } from 'react-router-dom';
import {ListGroup, ListGroupItem, NavItem} from 'react-bootstrap';
import classNames from 'classnames';

function LeftSideBar({ isMenuOpened, offMenu, setContWithoutDisappear }) {
    const sideBarClass = classNames({
      "left-side-bar": true,
      "contentLayer": isMenuOpened
    });

    return (
      <aside className={sideBarClass} onClick={() => { offMenu()} }>
            <ListGroup>
                <NavLink className="left-bar-item" to="/ordering">
                    <ListGroupItem>Place a new order</ListGroupItem>
                </NavLink>
                <NavLink className="left-bar-item" to="/reordering">
                    <ListGroupItem>Refill your previous order</ListGroupItem>
                </NavLink>
                <NavLink className="left-bar-item" to="/about">
                    <ListGroupItem >About Us</ListGroupItem>
                </NavLink>
                <NavLink className="left-bar-item" to="/policies">
                    <ListGroupItem >Our policies</ListGroupItem>
                </NavLink>
                <NavLink className="left-bar-item" to="/FAQ">
                    <ListGroupItem>FAQ</ListGroupItem>
                </NavLink>
                <NavLink className="left-bar-item" to="/discounts">
                    <ListGroupItem>Discounts</ListGroupItem>
                </NavLink>
                <NavLink className="left-bar-item" to="/contact">
                    <ListGroupItem>Contact Us</ListGroupItem>
                </NavLink>
            </ListGroup>
        </aside>
    )
}

export default LeftSideBar

