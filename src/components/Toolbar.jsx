import React from 'react';
import { NavLink} from 'react-router-dom';



function Toolbar({ user, onMenu, offMenu }) {
    return (
        <header className="mdc-toolbar">
            <div className="mdc-toolbar__row">
                <section className="mdc-toolbar__section mdc-toolbar__section--align-start">
                    <i className="fa fa-bars fa-2x" aria-hidden="true" onClick={onMenu}></i>
                    <NavLink className="mdc-toolbar__title" onClick={offMenu} to="/">Natural Beauty</NavLink>
                </section>

                <section className="mdc-toolbar__section mdc-toolbar__section--align-end" onClick={offMenu}>
                    <nav className="mdc-tab-bar" id="mdc-tab-bar">
                        <NavLink className="mdc-tab" activeClassName="activeTab" to="/about">ABOUT US</NavLink>
                        <NavLink className="mdc-tab" activeClassName="activeTab" to="/contact">CONTACT US</NavLink>
                        <NavLink className="mdc-tab" activeClassName="activeTab" to="/policies">OUR POLICIES</NavLink>
                        {user ?
                            <NavLink className="mdc-tab" to="/logout">Log out</NavLink>
                            :
                            <NavLink className="mdc-tab" to="/login">Log in</NavLink>}
                    </nav>
                </section>
            </div>
        </header>
    )
}

Toolbar.propTypes = {
    user: React.PropTypes.object,
    onMenu: React.PropTypes.func.isRequired
};

export default Toolbar