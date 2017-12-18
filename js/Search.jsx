import React from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

/**
 * @see https://babeljs.io/docs/plugins/transform-class-properties/
 * @see https://github.com/tc39/proposal-class-fields
 */
class Search extends React.Component {
  state = {
    searchTerm: "",
  };

  handleSearchTermChange = e => {
    const value = e.target.value;
    this.setState({
      searchTerm: value,
    });
  };

  render() {
    const { searchTerm } = this.state;
    return (
      <div className="search">
        <header>
          <h1>ReactFlix</h1>
          <input
            onChange={this.handleSearchTermChange}
            type="text"
            placeholder="Search"
            value={searchTerm}
          />
        </header>
        <div>
          {preload.shows
            .filter(
              show =>
                `${show.title} ${show.description}`
                  .toUpperCase()
                  .indexOf(searchTerm.toUpperCase()) >= 0,
            )
            .map(show => (
              <ShowCard
                key={show.imdbID}
                title={show.title}
                poster={show.poster}
                year={show.year}
                description={show.description}
              />
            ))}
        </div>
      </div>
    );
  }
}

export default Search;
