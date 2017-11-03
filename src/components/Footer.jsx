import React from 'react';

import SocialNetworks from './SocialNetworks';


function Footer() {
  return (
    <footer className="footer">
        <SocialNetworks />
        <div className="copy-rights">Natural Beauty All Rights Reserved &copy;{new Date().getFullYear()}</div>
    </footer>
  )
}

export default Footer