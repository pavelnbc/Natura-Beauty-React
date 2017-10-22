import React from 'react';

import classNames from 'classnames';

function Content({ children, isMenuOpened, offMenu, isContentVisible, setContWithoutDisappear }) {
  const contentClass = classNames({
    "content-layer": isMenuOpened
  });

  const wrapperClass = classNames({
    "content-is-hidden": true,
    "content-is-visible": isContentVisible
  });

  return (
    <div className={wrapperClass} onClick={() => { offMenu(); setContWithoutDisappear() }}>
      <div className={contentClass}>
        {children}
      </div>
    </div>
  )
}

export default Content
