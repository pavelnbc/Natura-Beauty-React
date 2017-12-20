import React from 'react';
import classNames from 'classnames';


function ContentShadow({ isMenuOpened, offMenu }) {
  let ContentShadowClassName = classNames({
    "content-without-shadow": true,
    "content-shadow": isMenuOpened
  });

  return (
    <div className={ContentShadowClassName} onClick={offMenu}></div>
  )
}

export default ContentShadow;