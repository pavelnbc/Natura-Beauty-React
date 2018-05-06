import React from 'react';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';


function RedirectToProdsComponent({ match, searchedMed }) {
    return (
        searchedMed && match.params.products !== "products"
      ? <Redirect to="/products" />
      : null
    )
}

let mapStateToProps = (state) => {
    return {
        searchedMed: state.searchValue
    }
};

const RedirectToProds = connect(mapStateToProps)(RedirectToProdsComponent);

RedirectToProds.propTypes = {
    match: PropTypes.object,
    searchValue: PropTypes.string
};

export default RedirectToProds