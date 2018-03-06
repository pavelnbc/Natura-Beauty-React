import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router} from 'react-router-dom';
import { Provider } from 'react-redux';
import storage from './storage'

import './css/index.css';
import "font-awesome/css/font-awesome.css";

import App from './App';


ReactDOM.render(
  <Provider store={storage}>
        <Router>
            <App />
        </Router>
    </Provider>,
document.getElementById('root'));