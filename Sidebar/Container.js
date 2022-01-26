import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";


const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <h2>Home</h2>
  },
  {
    path: "/Siapa",
    sidebar: () => <div>Saipa</div>,
    main: () => <h2>Siapa Here!</h2>
  },
  {
    path: "/Irkch",
    sidebar: () => <div>Iran Khohdro</div>,
    main: () => <h2>Iran Khohdro Here</h2>
  }
];

export default function Container() {
  return (
    <Router>
      <div style={{ display: "flex" }}>
        <div
          style={{
            padding: "10px",
            width: "40%",
            background: "#f0f0f0"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 0 }}>
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/Siapa">Siapa</Link>
            </li>
            <li>
              <Link to="/IRKCH">Irankhodro</Link>
            </li>
          </ul>

          <Switch>
            {routes.map((route, index) => (

              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "10px" }}>
          <Switch>
            {routes.map((route, index) => (
        
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
              
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
