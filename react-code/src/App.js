import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./assets/css/bootstrap.min.css";
import "./assets/css/bootstrap.css";

import "./assets/css/style.css";
import "./assets/css/stock.css";
import "./assets/css/media.css";

import Landing from "./container/Landing/";
/* eslint-disable */
class App extends Component {
  render() {
    return (
      <Router>
        <div className="wrapper">
          <Switch>
            <Route exact path="/" component={Landing} />
          </Switch>
        </div>
      </Router>
    )
  }
}
export default App
