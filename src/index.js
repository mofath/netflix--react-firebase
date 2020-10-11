import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles';

import 'normalize.css';


const app =
    <React.StrictMode>
        <GlobalStyles />
        <App />
    </React.StrictMode>;

ReactDOM.render(app, document.getElementById('root'));


