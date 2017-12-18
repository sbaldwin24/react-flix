// @flow

import React from "react";
import { Link } from "react-router-dom";

/**
 * @see https://reacttraining.com/react-router/web/api/Link
 */

const Landing = () => (
  <div className="landing">
    <h1>ReactFlix</h1>
    <input type="text" placeholder="Search" />
    <Link to="/search">Or Browse</Link>
  </div>
);

export default Landing;
