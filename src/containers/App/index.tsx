import React from 'react';
import {
  Switch,
  Route,
  Link,
} from "react-router-dom";
import '../../languages/languages.css';
import { EtymologyPage } from '../EtymologyPage'
import { WriteHieroglyphics } from '../WriteHieroglyphics'
import './style.css';

export const App = () => {
  return (
    <div className="App">
      <h1 className="page-title">The Hieroglyphic Origins of the Greek and Latin Alphabets</h1>
      <div className="link-container">
        <Link to="/">Home</Link>
        <Link to="/write">Write in Hieroglyphics and Phoenician</Link>
      </div>
      <Switch>
        <Route exact path="/write">
          <WriteHieroglyphics />
        </Route>
        <Route exact path="/">
          <EtymologyPage />
        </Route>
        <Route exact path="/hieroglyphics/:id">
          <EtymologyPage />
        </Route>
        <Route path="*">
          <EtymologyPage />
        </Route>
      </Switch>
      <p className="etymology-info">Information taken from <a href="https://en.wikipedia.org/wiki/Phoenician_alphabet" target="_blank" rel="noreferrer"> Wikipedia's Phoenician Alphabet</a> page</p>
    </div>
  );
}
