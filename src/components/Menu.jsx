import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import { ListGroup, ListGroupItem } from "react-bootstrap";
import FontAwesome from 'react-fontawesome';
import classNames from "classnames";
import axios from 'axios';

import SocialNetworks from './SocialNetworks';

import menuLinks from '../data/menuLinks.json'

class Menu extends Component {
  constructor({ offMenu }) {
    super({ offMenu });

    this.offMenu = offMenu;

    this.state = {
      menuLinks: []
    }
  }

  componentWillMount() {
    axios.get("/api/v1/menuLinks")
        .then(response => response.data)
        .then(menuLinks => this.setState({ menuLinks }))
        .catch(error => console.error(error))
  }

  render() {
      const { isMenuOpened } = this.props;

      let menuClassName = classNames({
          "menu-bar": true,
          "menuOn": isMenuOpened
      });

      return (
          <aside className={menuClassName} onClick={this.offMenu}>
            <div className="menu-bar-content">
              <div className="menu-logo">
                <img src="/img/menu-logo.png" alt="menu-logo-img" />
                <div className="motto">
                  <h2>Natural Beauty</h2>
                  <h4>We care</h4>
                </div>
              </div>
              <ListGroup>
                  {this.state.menuLinks.map((link, index) => {
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
            </div>
            <SocialNetworks />
          </aside>
      )
  }
}

function Menu({ isMenuOpened, offMenu }) {
  let menuClassName = classNames({
    "menu-bar": true,
    "menuOn": isMenuOpened
  });

  return (
    <aside className={menuClassName} onClick={() => { offMenu() }}>
      <div className="menu-bar-content">
        <div className="menu-logo">
          <img src="/img/menu-logo.png" alt="menu-logo-img" />
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
      </div>
      <SocialNetworks />
    </aside>
  )
}

export default Menu;
