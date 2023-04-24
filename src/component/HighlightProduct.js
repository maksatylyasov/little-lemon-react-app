import React, { Children } from "react";
import Button from "./Button";

const HighLightProduct = (props) => {
  return (
    <>
      <section className="highlight-product">
        <article className="left-column">
          <h1>{props.children.title}</h1>
          <p>{props.children.description}</p>
          <Button name="Order" />
        </article>
        <article className="image">
          <img src={props.children.image} alt={props.children.title} />
        </article>
      </section>
    </>
  );
};

export default HighLightProduct;
