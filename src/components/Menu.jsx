import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import classNames from "classnames";

import menuLinks from '../data/menuLinks.json'

function Menu({ isMenuOpened, offMenu }) {
  let menuClassName = classNames({
    "menu-bar": true,
    "menuOn": isMenuOpened
  });

  return (
    <aside className={menuClassName} onClick={() => { offMenu() }}>
      <div className="menu-logo">
        <img src="/img/menu-logo.png" alt="menu-logo-img"/>
        <div className="motto">
          <h2>Natural Beauty</h2>
          <h4>We care</h4>
        </div>
      </div>
      <ListGroup>
          {menuLinks.map((link, index) => {
            return (
                <NavLink key={index} to={link.direction}>
                  <ListGroupItem>
                      <FontAwesome name={link.icon} />
                      {link.title}
                  </ListGroupItem>
                </NavLink>
            )
          })}
      </ListGroup>
    </aside>
  )
}

export default Menu;
