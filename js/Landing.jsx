import React from "react";
import { Link } from "react-router-dom";

/**
 * @see https://github.com/airbnb/javascript#arrows--implicit-return
 * @see https://reacttraining.com/react-router/web/api/Link
 */
const Landing = () => (
  <div className="landing">
    <h1>ReactFlix</h1>
    <input placeholder="text" type="text" />
    <Link to="/search">or Browse All</Link>
  </div>
);

export default Landing;
