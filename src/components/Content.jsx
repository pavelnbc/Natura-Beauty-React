import React from 'react';

import classNames from 'classnames';

function Content({ children, isMenuOpened, offMenu, isVisible, onVisible }) {
  const contentClass = classNames({
    "contentLayer": isMenuOpened
  });

  const wrapperClass = classNames({
    "content": true,
    "content-is-hidden": true,
    "content-is-visible": isVisible
  });

  return (
    <div className={wrapperClass} onClick={() => { offMenu(); onVisible(true) }}>
      <div className={contentClass}>
        {children}
      </div>
    </div>
  )
}

export default Content
