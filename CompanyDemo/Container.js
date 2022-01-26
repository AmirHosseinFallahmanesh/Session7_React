import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import "./App.css";
import Page from "./navigation/Page";
import { routes } from "./routes";
import { generateAppRoutes } from "./navigation/utils";


export const Container = () => {
  const appRoutes = generateAppRoutes(routes);
  return (
    <div>
      <BrowserRouter basename={process.env.PUBLIC_URL}>
    <Switch>
      {appRoutes.map(route => (
        <Route key={route.path} path={route.path}>
          <Page route={route} />
        </Route>
      ))}
    </Switch>
  </BrowserRouter>
    </div>
  )
}


export default Container;
