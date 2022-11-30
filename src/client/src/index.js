import React from 'react';
import ReactDOM from 'react-dom/client';

import { Provider } from 'react-redux';
import { applyMiddleware, compose } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import reduxThunk from 'redux-thunk';

import reducers from './reducers';

import App from './App';

const composeEnhacers = window.__REDUX_DECTOOLS_EXTENSION_COMPOSE__ || compose
const store = configureStore({reducer:reducers}, composeEnhacers(applyMiddleware(reduxThunk)));

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <Provider store={store}>
    <App />
  </Provider>
);
