import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import './languages/languages.css';
import { EtymologyPage } from './components/EtymologyPage'
import { HieroglyphicsHeader } from './components/HieroglyphicsHeader'
import './App.css';

export const App = () => {
  return (
    <div className="App">
      <Router>
        <h1 className="page-title">The Hieroglyphic Origins of the Greek and Latin Alphabets</h1>
        <HieroglyphicsHeader />
        <Switch>
          <Route path="/:id" children={<EtymologyPage />} />
          <Route path="*" children={<EtymologyPage />} />
        </Switch>
        <p className="etymology-info">Information taken from <a href="https://en.wikipedia.org/wiki/Phoenician_alphabet" target="_blank"> Wikipedia's Phoenician Alphabet</a> page</p>
      </Router>
    </div>
  );
}
