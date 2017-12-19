// @flow
import React from "react";
import ShowCard from "./ShowCard";
import Header from "./Header";

/**
 * @see https://babeljs.io/docs/plugins/transform-class-properties/
 * @see https://github.com/tc39/proposal-class-fields
 */
class Search extends React.Component {
  state = {
    searchTerm: "",
  };

  /**
   * @see https://flow.org/en/docs/types/arrays/
   */
  props: {
    shows: Array<Show>,
  };

  /**
   * @see https://flow.org/en/docs/react/events/
   */
  handleSearchTermChange = (
    event: SyntheticKeyboardEvent & { target: HTMLInputElement },
  ) => {
    const value = event.target.value;
    this.setState({
      searchTerm: value,
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search">
        <Header
          searchTerm={searchTerm}
          showSearch
          handleSearchTermChange={this.handleSearchTermChange}
        />
        <div>
          {this.props.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(searchTerm.toUpperCase()) >= 0,
            )
            .map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
