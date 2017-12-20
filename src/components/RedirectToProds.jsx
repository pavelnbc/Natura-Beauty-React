import React from 'react';
import { Redirect } from 'react-router-dom';

function RedirectToProds({ searchValue }) {
  console.log(searchValue);
  return (
    searchValue
    ? <Redirect to="/products" /> 
    : null
  )
}

export default RedirectToProds