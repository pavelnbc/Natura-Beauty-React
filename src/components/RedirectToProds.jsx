import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';

function RedirectToProds({ match, searchValue }) {
    return (
      searchValue && match.params.products !== "products"
      ? <Redirect to="/products" />
      : null
    )
}

RedirectToProds.propTypes = {
    match: PropTypes.object,
    searchValue: PropTypes.string
};

export default RedirectToProds