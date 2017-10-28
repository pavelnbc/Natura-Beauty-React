import React from 'react';

import classNames from 'classnames';

function Content({ children, isMenuOpened, offMenu, isContentVisible, setContWithoutDisappear }) {

  const contentClass = classNames({
    "content-is-hidden": true,
    "content-is-visible": isContentVisible
  });

  return (
    <div className={contentClass} onClick={() => { offMenu(); setContWithoutDisappear() }}>
      {children}
    </div>
  )
}

export default Content
