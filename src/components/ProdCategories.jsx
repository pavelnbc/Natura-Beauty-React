import React from 'react';
import { NavLink } from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';

import categories from "../data/categories.json";

function ProdCategories({ toEmptySearch }) {

    return (
      <div className="prod-categories">
        <ListGroup>
          {categories.map((category, index) => {
            return (
              <NavLink key={index} 
                       to={`/products/${category.id}`} 
                       className="menuItem" 
                       onClick={toEmptySearch}
              >
                    <ListGroupItem>
                        <FontAwesome name="heartbeat" />
                        {category.title}
                    </ListGroupItem>
              </NavLink>
            );
          })}
        </ListGroup>
      </div>
    );
}

export default ProdCategories
