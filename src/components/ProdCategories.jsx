import React from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import {ListGroup, ListGroupItem} from 'react-bootstrap';
import FontAwesome from 'react-fontawesome';
import { connect } from 'react-redux';

import {deleteSearchValue} from "../actions";

function ProdCategoriesComponent({ categories, clearSearchValue }) {
    return (
        <div className="prod-categories">
            <ListGroup>
                {categories.map((category, index) => {
                    return (
                        <NavLink key={index}
                                 to={`/products/${category.id}`}
                                 onClick={clearSearchValue}
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

ProdCategoriesComponent.proptypes = {
   categories: PropTypes.array,
   clearSearchValue: PropTypes.func
};


let mapStateToProps = (state) => {
    return {
        categories: state.categories
    }
};

let mapDispatchToProps = (dispatch) => {
    return {
        clearSearchValue: () => dispatch(deleteSearchValue())
    }
};

const ProdCategories = connect(mapStateToProps, mapDispatchToProps)(ProdCategoriesComponent);

export default ProdCategories
