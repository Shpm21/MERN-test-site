import React from 'react';
import ReactDOM from 'react-dom/client';
//import { Provider } from 'react-redux'
//import store from './store/'
import './bootstrap.min.css'
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  // Cambiar la etiqueta <React.StrictMode> por <Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

reportWebVitals();
