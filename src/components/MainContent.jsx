import React from 'react';

import classNames from 'classnames';

function MainContent({ children, isContentVisible, setContWithoutDisappear }) {

  const contentClass = classNames({
    "content-is-hidden": true,
    "content-is-visible": isContentVisible
  });

  return (
    <div className={contentClass} onClick={setContWithoutDisappear}>
      {children}
    </div>
  )
}

export default MainContent
