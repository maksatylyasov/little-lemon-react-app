import React from "react";

const FeaturedItems = (props) => {
  return (
    <div className="featured">
      <h1 style={{ color: "#495e57", textAlign: "center" }}>Featured Items</h1>
      <section className="featured-items">
        <article className="item">
          <img src={props.children[1].image} />
          <h2>{props.children[1].title}</h2>
          <h3>{props.children[1].price}</h3>
        </article>
        <article className="item">
          <img src={props.children[2].image} />
          <h2>{props.children[2].title}</h2>
          <h3>{props.children[2].price}</h3>
        </article>
        <article className="item">
          <img src={props.children[3].image} />
          <h2>{props.children[3].title}</h2>
          <h3>{props.children[3].price}</h3>
        </article>
        <article className="item">
          <img src={props.children[4].image} />
          <h2>{props.children[4].title}</h2>
          <h3>{props.children[4].price}</h3>
        </article>
      </section>
    </div>
  );
};

export default FeaturedItems;
