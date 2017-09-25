import React from 'react';
import {NavLink} from 'react-router-dom';

import categories from '../data/categories.json';

function Menu(props) {
    return (
        <aside className={`mdc-permanent-drawer ${props.isOpened ? "menuOpened" : ""}`}>
                <nav className="mdc-list">
                    {categories.map( category => {
                        return <NavLink
                            key={category.id}
                            to={`/${category.id}`}
                            className="mdc-list-item"
                            activeClassName="mdc-list-item--selected">
                            {category.title}
                        </NavLink>
                    })}
                </nav>
        </aside>
    )
}

Menu.propTypes = {
    isOpened: React.PropTypes.bool.isRequired
};

export default Menu;