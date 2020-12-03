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
import {EtymologyPage} from './components/EtymologyPage' 

const App = () => {
  return (
    <div className="App">
      <Router>
            <div>
                <h2>Accounts</h2>

                <ul>
                    <li>
                        <Link to="/1">1</Link>
                    </li>
                    <li>
                        <Link to="/2">2</Link>
                    </li>
                    <li>
                        <Link to="/3">3</Link>
                    </li>
                </ul>

                <Switch>
                    <Route path="/:id" children={<EtymologyPage />} />
                    <Route path="*" children={<EtymologyPage />} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
