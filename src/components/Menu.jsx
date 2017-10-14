import React from 'react';
import { NavLink } from 'react-router-dom';
import { ListGroup, ListGroupItem } from 'react-bootstrap';
import classNames from 'classnames';

import categories from '../data/categories.json';

function Menu({isOpened, offMenu}) {
    let menuClassName = classNames({
        "mdc-permanent-drawer": true,
        "menuOn": isOpened
    });

    return (
        <div className={menuClassName}>
            <ListGroup>
                {categories.map((category, index) => {
                    return (
                        <ListGroupItem key={index}>
                            <NavLink
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
    )
}

export default Menu;
