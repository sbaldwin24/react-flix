import React from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

/**
 * @see https://github.com/tc39/proposal-class-fields
 */
class Search extends React.Component {
  state = {
    searchTerm: "ReactFlix",
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
          <h1>{searchTerm}</h1>
          <input
            placeholder="Search"
            onChange={this.handleSearchTermChange}
            type="text"
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
            .map((show, index) => (
              <ShowCard {...show} id={index} key={show.imdbID} />
            ))}}
        </div>
      </div>
    );
  }
}

export default Search;
