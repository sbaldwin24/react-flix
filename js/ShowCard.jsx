import React from "react";
import PropTypes from "prop-types";

const ShowCard = props => (
  <div className="show-card">
    <img
      alt={`${props.poster} Show Poster`}
      src={`../public/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  </div>
);

ShowCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShowCard;
