import { connect } from 'react-redux'; 

import Products from '../pages/Products';
import { addToCart, importProducts } from '../actions'

function mapStateToProps(state, ownProps) {
  return {
    products: state.products,
    searchedMed: state.searchValue,
    match: ownProps.match
  }
}

function mapDispatchToProps(dispatch) {
  dispatch(importProducts());
  return {
    getProduct:(product) => dispatch(addToCart(product))
  }
}

const ProductsContainer = connect(mapStateToProps, mapDispatchToProps)(Products);

export default ProductsContainer

