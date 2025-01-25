import React from 'react';
import ReactDOM from 'react-dom/client';

import './index.css';
import { BrowserRouter } from 'react-router-dom';

import App from './App';
import reportWebVitals from './reportWebVitals';
import './assets/fonts/Inter/Inter-Bold.ttf';
import './assets/fonts/Inter/Inter-ExtraBold.ttf';
import './assets/fonts/Inter/Inter-ExtraLight.ttf';
import './assets/fonts/Inter/Inter-Light.ttf';
import './assets/fonts/Inter/Inter-Medium.ttf';
import './assets/fonts/Inter/Inter-Regular.ttf';
import './assets/fonts/Inter/Inter-SemiBold.ttf';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
