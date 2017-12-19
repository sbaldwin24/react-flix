// @flow

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
// import styled from "styled-components";
/**
 * @todo add styled components
 */

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

/**
 * @see https://github.com/reactjs/react-redux/blob/master/docs/api.md#connectmapstatetoprops-mapdispatchtoprops-mergeprops-options
 */
const mapStateToProps = state => ({
  searchTerm: state.searchTerm,
});

export default connect(mapStateToProps)(Landing);
