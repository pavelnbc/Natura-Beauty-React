import React from 'react';
import { connect } from 'react-redux';

import { setDropdownMenuClosed } from '../actions'

function Content({ setDropdownClosed, children }) {

  function setDropdownMenuClosed(event) {
      if(event.target.id === 'heder__ dropdown-categories') return

      if(event.target.id !== 'header__dropdown-icon') {
          setDropdownClosed();
      }
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