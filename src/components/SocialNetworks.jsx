import React from 'react';
import FontAwesome from 'react-fontawesome';

function SocialNetworks() {
    return (
        <div className="social">
            <a href="https://www.facebook.com/" className="fb" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="facebook-square" size="3x" />
            </a>
            <a href="https://twitter.com/" className="fb" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="twitter-square" size="3x" />
            </a>
            <a href="https://ru.pinterest.com/" className="fb" target="_blank" rel="noopener noreferrer">
                <FontAwesome name="pinterest-square" size="3x" />
            </a>
        </div>
    )
}

export default SocialNetworks