import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { Provider } from 'react-redux';
import AppStore from './store/AppStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={AppStore}>
    <App />
  </Provider>
);


