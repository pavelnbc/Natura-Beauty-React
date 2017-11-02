import React from 'react';

import classNames from 'classnames';

function LeftBarContent({ children, isContentVisible }) {
  let leftBarContentClass = classNames({
    "content-is-hidden": true,
    "content-is-visible": isContentVisible
  })

  return (
    <aside className={leftBarContentClass}>
        {children}
    </aside>
  )
}

export default LeftBarContent