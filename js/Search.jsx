import React from "react";
import preload from "../data.json";
import ShowCard from "./ShowCard";

class Search extends React.Component {
  render() {
    return (
      <div className="search">
        <div>
          {preload.shows.map(show => <ShowCard key={show.imdbID} {...show} />)}
        </div>
      </div>
    );
  }
}

export default Search;
