import React from "react";
import Home from './Home'
import Topics from './Topics'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";

export default function Container() {
    return (
        <Router>
        <div>
          <ul>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/topics">Topics</Link>
            </li>
          </ul>
  
          <hr />
  
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/topics">
              <Topics />
            </Route>
          </Switch>
        </div>
      </Router>
    );
  }