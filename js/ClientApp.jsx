import React from "react";
import ReactDOM from "react-dom";

/**
 * @see https://github.com/airbnb/javascript#arrows--implicit-return
 */
const App = () => (
  <div className="app">
    <div className="landing">
      <h1>svideo</h1>
      <input type="text" placeholder="Search" />
      <a>or Browse All</a>
    </div>
  </div>
);

ReactDOM.render(<App />, document.getElementById("app"));
