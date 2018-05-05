import React from 'react';
import { connect } from 'react-redux';

import { setDropdownMenuClosed } from '../actions'

function Content({ setDropdownClosed, children }) {

  function setDropdownMenuClosed(event) {
      console.log(event.target);

      if(event.target.closest('#header__dropdown-icon')) return;

      if(event.target.id === 'header__ dropdown-categories') return;

      let dropDownSubList = document.getElementById('sub-list');
      dropDownSubList.classList.remove('unfolded');

      setDropdownClosed();
  }

  return (
    <main className="content" id="content" onClick={setDropdownMenuClosed}>
      {children}
    </main>
  )
}

function mapDispatchToProps(dispatch) {
    return {
      setDropdownClosed: () => dispatch(setDropdownMenuClosed())
    }
}

const ContentContainer = connect(null, mapDispatchToProps)(Content);

export default ContentContainer