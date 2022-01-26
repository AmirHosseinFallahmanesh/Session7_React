import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

import {Home} from './Home'
import {About} from './About'


export default function Container() {
    return (
        <Router>
          <div>
            <OldSchoolMenuLink
              activeOnlyWhenExact={true}
              to="/"
              label="Home"
            />
            <OldSchoolMenuLink to="/about" label="About" />
    
            <hr />
    
            <Switch>
              <Route exact path="/">
                <Home />
              </Route>
              <Route path="/about">
                <About />
              </Route>
            </Switch>
          </div>
        </Router>
      );
    }

    function OldSchoolMenuLink({ label, to, activeOnlyWhenExact }) {
        let match = useRouteMatch({
          path: to,
          exact: activeOnlyWhenExact
        });
      
        return (
          <div className={match ? "active" : ""}>
            {match && "> "}
            <Link to={to}>{label}</Link>
          </div>
        );
      }