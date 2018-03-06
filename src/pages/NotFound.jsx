import React from 'react';
import FontAvesome from 'react-fontawesome';

function NotFound() {
    return (
        <div className="not-found">
            <FontAvesome name="frown-o" size="5x"/>
            <h1>404</h1>
            <h2>Page not found</h2>
        </div>
    )
}

export default NotFound