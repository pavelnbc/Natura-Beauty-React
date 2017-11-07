import React from 'react';

import classNames from 'classnames';

function MainContent({ children, isContentVisible }) {

  const contentClass = classNames({
    "content-is-hidden": true,
    "content-is-visible": isContentVisible
  });

  return (
    <div className={contentClass} >
      {children}
    </div>
  )
}

export default MainContent
