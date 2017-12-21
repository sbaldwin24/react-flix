// @flow

import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import { setSearchTerm } from "./actionCreators";

/**
 * @see https://flow.org/en/docs/react/hoc/#injecting-props-with-a-higher-order-component-a-classtoc-idtoc-injecting-props-with-a-higher-order-component-hreftoc-injecting-props-with-a-higher-order-componenta
 */
const Header = (props: {
  showSearch?: boolean,
  handleSearchTermChange: Function,
  searchTerm: string,
}) => {
  let utilSpace;
  if (props.showSearch) {
    utilSpace = (
      <input
        onChange={props.handleSearchTermChange}
        value={props.searchTerm}
        type="text"
        placeholder="Search"
      />
    );
  } else {
    utilSpace = (
      <h2>
        <Link to="/search">Back</Link>
      </h2>
    );
  }
  return (
    <header>
      <h1>
        <Link to="/">ReactFlix</Link>
      </h1>
      {utilSpace}
    </header>
  );
};

/**
 * @see https://reactjs.org/docs/typechecking-with-proptypes.html
 */
Header.defaultProps = {
  showSearch: false,
};

const mapStateToProps = state => ({ searchTerm: state.searchTerm });
const mapDispatchToProps = (dispatch: Function) => ({
  handleSearchTermChange(e) {
    const value = e.target.value;
    dispatch(setSearchTerm(value));
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);
