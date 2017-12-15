import React from "react";
import { render } from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";

/**
 * @see https://github.com/airbnb/javascript#arrows--implicit-return
 * @see https://reacttraining.com/react-router/web/api/Link
 */
const App = () => (
  <Router>
    <div className="app">
      <Route exact path="/" component={Landing} />
      <Route path="/search" component={Search} />
    </div>
  </Router>
);

render(<App />, document.getElementById("app"));
