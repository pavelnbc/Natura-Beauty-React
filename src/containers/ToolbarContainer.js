import { connect } from 'react-redux';
import PropTypes from 'prop-types';

import Toolbar from '../components/Toolbar';
import { handleMenu, deleteSearchValue, importCategories, updateCartState, setDropdownMenuOpened } from '../actions';

function mapStateToProps(state, ownProps) {
  return {
    categories: state.categories,
    totalPrice: state.totalPrice,
    itemAmount: state.cartItems.length ? state.cartItems.length : null,
    isDropdownOpened: state.isDropdownOpened,
    match: ownProps.match
  }
}

function mapDispatchToProps(dispatch) {
  dispatch(updateCartState());
  dispatch(importCategories());
  return {
    onMenu: () => dispatch(handleMenu()),
    setEmptySearch: () => dispatch(deleteSearchValue()),
    setDropdownOpened: () => dispatch(setDropdownMenuOpened())
  }
}

const ToolbarContainer = connect(mapStateToProps, mapDispatchToProps)(Toolbar);

ToolbarContainer.propTypes = {
  ownProps: PropTypes.object
};

export default ToolbarContainer