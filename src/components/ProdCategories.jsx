import React from 'react';
import { NavLink } from 'react-router-dom';
import {ListGroup, ListGroupItem, NavItem} from 'react-bootstrap';

import categories from "../data/categories.json";

function LeftSideBar() {

    return (
      <div className="prod-categories">
        <ListGroup>
          {categories.map((category, index) => {
            return (
              <NavLink
                to={`/products/${category.id}`}
                className="menuItem"
              >
                <ListGroupItem key={index}>
                  {category.title}
                </ListGroupItem>
              </NavLink>
            );
          })}
        </ListGroup>
      </div>
    );
}

export default LeftSideBar
