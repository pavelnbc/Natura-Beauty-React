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
      <aside className={sideBarClass} onClick={() => { offMenu(); setContWithoutDisappear()} }>
            <ListGroup>
                <ListGroupItem>
                    <NavLink className="navItem" to="/ordering">Place a new order</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/reordering">Refill your previous order</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/FAQ">FAQ</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/discounts" >Discounts</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <a href="https://www.usps.com/" target="_blank" rel="noopener noreferrer" title="USPS.com">Order status</a>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/contact">Contact Us</NavLink>
                </ListGroupItem>
            </ListGroup>
        </aside>
    )
}

export default LeftSideBar