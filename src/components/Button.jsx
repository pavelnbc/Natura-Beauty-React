import React from 'react';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

function Button(props) {
        if(props.icon && props.link) {
            return (
                <div className={props.class}>
                    <div className="button__desc" onClick={props.action}>
                        <img src={props.icon} className="spinner-img" alt="med-icon"/>
                        {props.children}
                    </div>
                    <div className="button__info">
                        <NavLink to={props.link}
                                 className="info-btn"
                        >
                            <FontAwesome name="question-circle"/>
                        </NavLink>
                    </div>
                </div>
            )
        }

        return (
            <div className={props.class} onClick={props.action}>
                {props.children}
            </div>
        )
}

export default Button