// @flow

import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import type { Match } from "react-router-dom";
import Landing from "./Landing";
import Search from "./Search";
import Details from "./Details";
import preload from "../data.json";

/**
 * @see http://2ality.com/2012/04/arrow-functions.html
 * @see https://github.com/airbnb/javascript#arrows--implicit-return
 */
const FourOhFour = () => <h1>404</h1>;

/**
 * @see https://reacttraining.com/react-router/web/api/BrowserRouter
 * @see https://reacttraining.com/react-router/web/api/Switch
 */
const App = () => (
  <Router>
    <div className="app">
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="/search" component={Search} />
        <Route
          path="/details/:id"
          component={(props: { match: Match }) => (
            <Details
              {...props}
              show={preload.shows.find(
                show => props.match.params.id === show.imdbID,
              )}
            />
          )}
        />
        <Route component={FourOhFour} />
      </Switch>
    </div>
  </Router>
);

export default App;
