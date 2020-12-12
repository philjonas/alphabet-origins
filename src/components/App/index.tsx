import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
} from "react-router-dom";
import '../../languages/languages.css';
import { EtymologyPage } from '../EtymologyPage'
import { HieroglyphicsHeader } from '../HieroglyphicsHeader'
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <h1 className="page-title">The Hieroglyphic Origins of the Greek and Latin Alphabets</h1>
        <div>
          <Link to="/">Home</Link>
          <Link to="/write">Write in Hieroglyphics and Phoenician</Link>
        </div>
        <HieroglyphicsHeader />
        <Switch>
          <Route exact path="/write">
            <div>write</div>
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
        <p className="etymology-info">Information taken from <a href="https://en.wikipedia.org/wiki/Phoenician_alphabet" target="_blank"> Wikipedia's Phoenician Alphabet</a> page</p>
      </Router>
    </div>
  );
}
