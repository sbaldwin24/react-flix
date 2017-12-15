import React from "react";
import { Link } from "react-router-dom";

const Landing = () => (
  <div className="landing">
    <h1>ReactFlix</h1>
    <input placeholder="text" type="text" />
    <Link to="/search">or Browse All</Link>
  </div>
);

export default Landing;
