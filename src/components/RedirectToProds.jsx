import React from 'react';
import { Redirect } from 'react-router-dom';

function RedirectToProds({ match, searchValue }) {
    console.log(match.params.products);
    return (
      searchValue && match.params.products !== "products"
      ? <Redirect to="/products" />
      : null
    )
}

export default RedirectToProds