import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import categories from '../data/categories.json';

function Menu({isOpened, offMenu}) {
    return (
        <ReactCSSTransitionGroup component="main"
                                 transitionName="slide"
                                 transitionEnterTimeout={300}
                                 transitionLeaveTimeout={300}>
            {isOpened
            ?
            <div className="mdc-permanent-drawer">
                <ListGroup>
                    {categories.map( category => {
                        return (
                            <ListGroupItem>
                                <NavLink
                                    key={category.id}
                                    to={`/products/${category.id}`}
                                    className="menuItem"
                                    onClick={offMenu}>
                                    {category.title}
                                </NavLink>
                            </ListGroupItem>
                        )
                    })}
                </ListGroup>
            </div>
            :
            null}
        </ReactCSSTransitionGroup>
    )
}

Menu.propTypes = {
    isOpened: React.PropTypes.bool.isRequired
};

export default Menu;

/*<ListGroupItem onClick={offMenu}>
 <NavLink className="navItem" to="/products">Our Products</NavLink>
 </ListGroupItem>
 <ListGroupItem onClick={offMenu}>
 <NavLink className="navItem" to="/about">About Us</NavLink>
 </ListGroupItem>
 <ListGroupItem onClick={offMenu}>
 <NavLink className="navItem" to="/contact">Contact Us</NavLink>
 </ListGroupItem>
 <ListGroupItem onClick={offMenu}>
 <NavLink className="navItem" to="/policies">Our Policies</NavLink>
 </ListGroupItem>*/