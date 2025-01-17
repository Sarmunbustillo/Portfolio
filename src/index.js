import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import { BrowserRouter} from "react-router-dom";
import styledNormalize from 'styled-normalize'
import { createGlobalStyle } from 'styled-components'

createGlobalStyle`
  ${styledNormalize}`

ReactDOM.render(
        <BrowserRouter>
    <App />
        </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
