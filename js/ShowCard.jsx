// @flow

import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

/**
 * @see https://github.com/styled-components/styled-components
 * @see https://www.styled-components.com/
 * @see http://wesbos.com/tagged-template-literals/
 * @see https://flow.org/en/docs/types/any/
 */
const Wrapper = styled((Link: any))`
  border: 2px solid #333;
  border-radius: 4px;
  color: #000;
  margin-bottom: 25px;
  overflow: hidden;
  padding-right: 10px;
  text-decoration: none;
  width: 32%;
`;

const Image = styled.img`
  float: left;
  margin-right: 10px;
  width: 46%;
`;

/**
 * @see https://flow.org/en/docs/react/hoc/#injecting-props-with-a-higher-order-component-a-classtoc-idtoc-injecting-props-with-a-higher-order-component-hreftoc-injecting-props-with-a-higher-order-componenta
 */
const ShowCard = (props: Show) => (
  <Wrapper to={`/details/${props.imdbID}`}>
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
