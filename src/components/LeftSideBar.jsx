import React from 'react';
import { NavLink } from 'react-router-dom';
import {ListGroup, ListGroupItem, NavItem} from 'react-bootstrap';

function LeftSideBar() {
    return (
        <aside className="left-side-panel">
            <ListGroup>
                <ListGroupItem>
                    <NavLink className="navItem" to="/">Place a new order</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/">Refill your previous order</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/">FAQ</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/" >Discounts</NavLink>
                </ListGroupItem>
                <ListGroupItem>
                    <NavLink className="navItem" to="/" >Order Status</NavLink>
                </ListGroupItem>
            </ListGroup>
        </aside>
    )
}

export default LeftSideBar