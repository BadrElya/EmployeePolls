import React from 'react';
import './index.css';
import App from './components/App';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
import reducer from './reducers';
import middleware from './middlewares';
import { createRoot } from 'react-dom/client';


const root = createRoot(document.getElementById('root') || document.createElement('div'));

export const store = createStore(reducer, middleware);



root.render(
  <Provider store={store}>
    <App />
  </Provider>
);