import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import classNames from "classnames";

import categories from "../data/categories.json";

function Menu({ isMenuOpened, offMenu }) {
  let menuClassName = classNames({
    "mdc-permanent-drawer": true,
    "menuOn": isMenuOpened
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
                onClick={offMenu}
              >
                {category.title}
              </NavLink>
            </ListGroupItem>
          );
        })}
      </ListGroup>
    </div>
  );
}

export default Menu;
