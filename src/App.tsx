import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";
import './App.css';
import './languages/languages.css';
import { EtymologyPage } from './components/EtymologyPage'
import { HieroglyphicsHeader } from './components/HieroglyphicsHeader'

export const App = () => {
  return (
    <div className="App">
      <Router>
        <h2>The Hieroglyphic Origins of the Greek and Latin Alphabets</h2>

        <HieroglyphicsHeader />

        <Switch>
          <Route path="/:id" children={<EtymologyPage />} />
          <Route path="*" children={<EtymologyPage />} />
        </Switch>

      </Router>
    </div>
  );
}
