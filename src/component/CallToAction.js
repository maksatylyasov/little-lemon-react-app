import React, { Component } from "react";
import HeroImage from "../assets/restauranfood.jpg";

const CallToAction = (props) => {
  return (
    <div className="CallToAction">
      <div>
        <h2 className="Header-text">Little Lemon</h2>
        <h3 className="Header-text-sub1">Chicago</h3>

        <p className="hero-description">
          Our restaurant offers a wide variety of delicious dishes to suit every
          taste. We use only the freshest ingredients and traditional cooking
          techniques to bring you authentic flavors from around the world.
          Whether you're in the mood for a hearty pasta dish or a light salad,
          you'll find something you love on our menu. We also have a full bar
          with a selection of wine and beer to complement your meal. Come dine
          with us and experience the true taste of culinary excellence.
        </p>
        <button className="Button">Reserve a Table</button>
      </div>
      <div>
        <img className="img-wrap-hero" src={HeroImage} alt="hero images" />
      </div>
    </div>
  );
};
export default CallToAction;
