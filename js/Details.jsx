// @flow

import React from "react";
import Header from "./Header";

/**
 * @see https://flow.org/en/docs/react/hoc/#injecting-props-with-a-higher-order-component-a-classtoc-idtoc-injecting-props-with-a-higher-order-component-hreftoc-injecting-props-with-a-higher-order-componenta
 * @see https://reacttraining.com/react-router/web/api/Link
 */
const Details = (props: { show: Show }) => {
  const { title, description, year, poster, trailer } = props.show;
  return (
    <div className="details">
      <Header />
      <section>
        <h1>{title}</h1>
        <h2>({year})</h2>
        <img
          src={`/public/img/posters/${poster}`}
          alt={`Poster for ${title}`}
        />
        <p>{description}</p>
      </section>
      <div>
        <iframe
          src={`https://www.youtube-nocookie.com/embed/${trailer}?rel=0&amp;controls=0&amp;showinfo=0`}
          frameBorder="0"
          allowFullScreen
          title={`Trailer for ${title}`}
        />
      </div>
    </div>
  );
};

export default Details;
