import React from 'react';

import classNames from 'classnames';

function Content( {children, isMenuOpened, offMenu} ) {
    var contentClass =  classNames({
        "content": true,
        "contentLayer": isMenuOpened
    });

    return (
        <div onClick={offMenu}>
            <div className={contentClass}>
                {children}
            </div>
        </div>
    )
}

export default Content