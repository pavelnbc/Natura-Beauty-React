import React from 'react';
import { connect } from 'react-redux';

import { setDropdownMenuClosed } from '../actions'

function Content({ setDropdownClosed, children }) {

  function setDropdownMenuClosed(event) {
      console.log(event.target);

      let dropDownSubList = document.getElementById('sub-list');

      if(event.target.classList.contains('header__dropdown-icon')) return;
      if(event.target.classList.contains('header__dropdown-icon-triangle')) return;

      if(event.target.id === 'heder__ dropdown-categories') return;

      setDropdownClosed();
      dropDownSubList.classList.remove('unfolded');
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