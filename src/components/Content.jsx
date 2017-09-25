import React from 'react';

function Content( {children, isMenuOpened} ) {
    return (
        <div className={`content ${isMenuOpened ? "contentLayer" : ""}`}>
            {children}
        </div>
    )
}

Content.propTypes = {
    children: React.PropTypes.node,
    isMenuOpen: React.PropTypes.bool
}

export default Content