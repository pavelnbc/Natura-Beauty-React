import React from "react";
import PropTypes from 'prop-types';
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import classNames from "classnames";
import { connect } from 'react-redux';

import SocialNetworks from './SocialNetworks';

import { offMenu, importMenuLinks } from '../actions';

function MenuComponent({ menuLinks, isMenuOpened, offMenu, importMenuList }) {
  let menuClassName = classNames({
    "menu-bar": true,
    "menuOn": isMenuOpened
  });

  (function () {
      if(!menuLinks.length) {
          importMenuList();
      }
  })();

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

MenuComponent.propTypes = {
  menuLinks: PropTypes.array,
  isMenuOpened: PropTypes.bool,
  offMenu: PropTypes.func,
  importMenuList: PropTypes.func
};


function mapStateToProps(state) {
  return {
    menuLinks: state.menuLinks,
    isMenuOpened: state.isMenuOpened
  }
}

function mapDispatchToProps(dispatch) {
  return {
    offMenu: () => dispatch(offMenu()),
    importMenuList: () => dispatch(importMenuLinks())
  }
}

const Menu = connect(mapStateToProps, mapDispatchToProps)(MenuComponent);

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