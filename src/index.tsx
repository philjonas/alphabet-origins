import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";
import store from './store/index';
import './index.css';
import { App } from './components/App';
import { BrowserRouter as Router } from "react-router-dom";

// TODO: remove this, just exposing the store to the console for a bit ;)//////
(window as any).store = store;
///////////////////////////////////////////////////////////////////////////////

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <Router basename={process.env.PUBLIC_URL}>
        <App />
      </Router>
    </Provider>
  </React.StrictMode>,
  document.getElementById('root')
);