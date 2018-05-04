import React from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import classNames from "classnames";

import SocialNetworks from './SocialNetworks';

function Menu({ menuLinks, isMenuOpened, offMenu, importMenuLinks }) {
  let menuClassName = classNames({
    "menu-bar": true,
    "menuOn": isMenuOpened
  });

  return (
    <aside className={menuClassName}>
      <div className="menu-bar-content">
        <div className="menu-logo">
          <img src="/img/menu-logo.png" alt="menu-logo-img" />
          <div className="motto">
            <h2>Natural Beauty</h2>
            <h4>We care</h4>
          </div>
        </div>
        { menuLinks.length
        ? <ListGroup onClick={offMenu}>
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
        : <img className="menu-links-loading" src="/img/menu-list-loading.gif" alt="loading"/>
        }
      </div>
      <SocialNetworks />
    </aside>
  )
}

export default Menu;


















/*import React from 'react';
import { ListGroup, ListGroupItem } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import classNames from 'classnames';

function Menu({ menuLinks, isMenuOpened, offMenu } ) {
  let menuClassName = classNames({
     "menu-bar": true,
     menuOff: isMenuOpened
  });

  return (
      <aside className="menu">
        <div className="menu__top">
          <img src="" alt="menu__img"/>
          <div className="menu__compay-name">
            Natural Beauty
          </div>
          <div className="menu__logo">
            We care
          </div>
        </div>
        {menuLinks.links
        ? <ListGroup onClick={offMenu}>
                {
                    menuLinks.map((link) => {
                        return (
                            <ListGroupItem>
                              <FontAwesome name={link.icon}/>
                                {link.title}
                            </ListGroupItem>
                        )
                    })
                }
            </ListGroup>
        : <img className="menu-links-loading" src="/img/menu-list-loading.gif" alt="loading"/>
        }

      </aside>
  )
}

export default Menu


*/