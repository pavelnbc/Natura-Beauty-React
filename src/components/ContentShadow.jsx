import React from 'react';
import classNames from 'classnames';
import { connect } from 'react-redux';

import { offMenu } from '../actions';


function ContentShadowComponent({ isMenuOpened, offMenu }) {
  let ContentShadowClassName = classNames({
    "content-without-shadow": true,
    "content-shadow": isMenuOpened
  });

  return (
    <div className={ContentShadowClassName} onClick={offMenu}></div>
  )
}

function mapStateToProps(state) {
  return {
    isMenuOpened: state.isMenuOpened
  }
}

function mapDispatchToProps(dispatch) {
  return {
    offMenu: () => dispatch(offMenu())
  }
}

const ContentShadow = connect(mapStateToProps, mapDispatchToProps)(ContentShadowComponent);


export default ContentShadow;