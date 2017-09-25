import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';

import './index.css';
import 'material-components-web/dist/material-components-web.css';
import 'material-components-web/dist/material-components-web.js';
import "font-awesome/css/font-awesome.css"

import App from './App';

ReactDOM.render(
    <Router>
        <App />
    </Router>,
document.getElementById('root'));