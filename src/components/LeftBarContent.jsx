import React from 'react';

import classNames from 'classnames';

function LeftBarContent({ children, offMenu, isContentVisible, isMenuOpened }) {
  let leftBarContentClass = classNames({
    "left-bar-content": true,
    "content-layer": isMenuOpened,
    "content-is-hidden": true,
    "content-is-visible": isContentVisible
  })

  return (
    <aside onClick={offMenu}>
      <div className={leftBarContentClass}>
        {children}
      </div>
    </aside>
  )
}

export default LeftBarContent