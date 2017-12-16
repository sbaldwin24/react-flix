import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
/**
 * @see https://github.com/styled-components/styled-components
 * @see https://www.styled-components.com/
 */
const Wrapper = styled.div`
  border: 2px solid #333;
  border-radius: 4px;
  margin-bottom: 25px;
  overflow: hidden;
  padding-right: 10px;
  width: 32%;
`;

const Image = styled.img`
  float: left;
  margin-right: 10px;
  width: 46%;
`;

const ShowCard = props => (
  <Wrapper>
    <Image
      alt={`${props.poster} Show Poster`}
      src={`../public/img/posters/${props.poster}`}
    />
    <div>
      <h3>{props.title}</h3>
      <h4>{props.year}</h4>
      <p>{props.description}</p>
    </div>
  </Wrapper>
);

ShowCard.propTypes = {
  poster: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  year: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
};

export default ShowCard;
