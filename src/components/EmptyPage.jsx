import React from 'react';

function EmptyPage({ content }) {
    return (
        <div className="empty-page">
            <p>{ content }</p>
        </div>
    )
}

export default EmptyPage