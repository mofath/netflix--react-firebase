import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { GlobalStyles } from './global-styles';

import FirebaseProvider from "./context/firebase.provider";

import 'normalize.css';


const app =
    <FirebaseProvider>
        <GlobalStyles />
        <App />
    </FirebaseProvider>;

ReactDOM.render(app, document.getElementById('root'));

