import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store/index';
import './index.css';
import { HashRouter } from "react-router-dom";
import { App } from './containers/App';

// TODO: remove this, just exposing the store to the console for a bit ;)//////
(window as any).store = store;
///////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <HashRouter basename={process.env.PUBLIC_URL}>
        <App />
      </HashRouter>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);