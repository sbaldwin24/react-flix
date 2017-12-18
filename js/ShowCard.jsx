// @flow

import React from "react";
import styled from "styled-components";

/**
 * @see https://github.com/styled-components/styled-components
 * @see https://www.styled-components.com/
 * @see http://wesbos.com/tagged-template-literals/
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

const ShowCard = (props: {
	poster: string,
	title: string,
	year: string,
	description: string
}) => (
  <Wrapper>
    <Image
      alt={`${props.title} Show Poster`}
      src={`../public/img/posters/${props.poster}`}
    />
    <h3>{props.title}</h3>
    <h4>({props.year})</h4>
    <p>{props.description}</p>
  </Wrapper>
);

export default ShowCard;
