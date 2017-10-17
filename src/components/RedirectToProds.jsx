import React from 'react';
import { Redirect } from 'react-router-dom';

function RedirectToProds({ searchValue }) {
  return (
    searchValue 
    ? <Redirect to="/products" /> 
    : null
  )
}

export default RedirectToProds