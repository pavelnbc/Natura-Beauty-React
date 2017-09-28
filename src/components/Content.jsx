import React from 'react';

function Content( {children, isMenuOpened, offMenu} ) {
    return (
        <div onClick={offMenu} className="supLayer">
            <div className={`content ${isMenuOpened ? "contentLayer" : ""}`}>
                {children}
            </div>
        </div>
    )
}

Content.propTypes = {
    children: React.PropTypes.node,
    isMenuOpen: React.PropTypes.bool,
    offMenu: React.PropTypes.func
}

export default Content