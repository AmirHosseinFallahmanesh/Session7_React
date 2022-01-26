import React from 'react'
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "../App.css";
import Brand from './Brand'
import Error from  './Error'
import Menu from  './Menu'

export const Container = () => {
    return (
        <div>
               <div className="App">
      <Router>
        <Menu />
        <Switch>
          <Route path="/error">
            <Error />
          </Route>
          <Route path="/:brand">
            <Brand />
          </Route>
          <Route path="/">Please select brand...</Route>
        </Switch>
      </Router>
    </div>
        </div>
    )
}

export default  Container;