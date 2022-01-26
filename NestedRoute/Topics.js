import React from "react";
import  {Topic} from './Topic'
import {
  Switch,
  Route,
  Link,
  useRouteMatch
} from "react-router-dom";

export default function Topics() {

    let { path, url } = useRouteMatch();
  
    return (
      <div>
        <h2>Topics</h2>
        <ul>
          <li>
            <Link to={`${url}/rendering`}>Rendering with React</Link>
          </li>
          <li>
            <Link to={`${url}/components`}>Components</Link>
          </li>
          <li>
            <Link to={`${url}/props-v-state`}>Props v. State</Link>
          </li>
        </ul>
  
        <Switch>
          <Route exact path={path}>
            <h3>Please select a topic.</h3>
          </Route>
          <Route path={`${path}/:topicId`}>
            <Topic />
          </Route>
        </Switch>
      </div>
    );
  }
  