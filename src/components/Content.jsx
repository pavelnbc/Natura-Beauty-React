import React from 'react';

function Content( {children, isMenuOpened, offMenu} ) {
    return (
        <div onClick={offMenu}>
            <div className={`content ${isMenuOpened ? "contentLayer" : ""}`}>
                {children}
            </div>
        </div>
    )
}

export default Content