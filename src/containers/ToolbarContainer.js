import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Toolbar from '../components/Toolbar';
import { handleMenu, deleteSearchValue, importCategories, updateCartState } from '../actions';

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    totalPrice: state.totalPrice,
    itemAmount: state.cartItems.length ? state.cartItems.length : null,
    match: ownProps.match
  }
}

function mapDispatchToProps(dispatch) {
  dispatch(updateCartState());
  dispatch(importCategories());
  return {
    onMenu: () => dispatch(handleMenu()),
    setEmptySearch: () => dispatch(deleteSearchValue())
  }
}

const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

ToolbarContainer.propTypes = {
  ownProps: PropTypes.object
}

export default ToolbarContainer