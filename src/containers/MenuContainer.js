import { connect } from 'react-redux';

import Menu from '../components/Menu';
import { offMenu, importMenuLinks } from '../actions'


function mapStateToProps(state) {
  return {
    menuLinks: state.menuLinks,
    isMenuOpened: state.isMenuOpened,
  }
}

function mapDispatchToProps(dispatch) {
  // dispatch(importMenuLinks());
  return {
    offMenu: () => dispatch(offMenu()),
    importMenuLinks: () => dispatch(importMenuLinks())
  }
}

const MenuContainer = connect(mapStateToProps, mapDispatchToProps)(Menu);

export default MenuContainer