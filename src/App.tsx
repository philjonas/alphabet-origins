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

import Etymology from './components/Etymology/index'

const Child = () => {
  let { id }: { id?: string } = useParams();

  return (
      <div>
          <h3>ID: {id}</h3>
          <Etymology />
      </div>
  );
}

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
                    <Route path="/:id" children={<Child />} />
                    <Route path="*" children={<Child />} />
                </Switch>
            </div>
        </Router>
    </div>
  );
}

export default App;
