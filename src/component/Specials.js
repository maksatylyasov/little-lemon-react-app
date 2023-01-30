import React, { Component } from "react";
import CardImage1 from "../assets/greek-salad.jpg";
import CardImage2 from "../assets/lemon-dessert.jpg";
import CardImage3 from "../assets/bruschetta.jpg";
import FastDeliveryImage from "../assets/fast-delivery.jpg";

const Specials = () => {
  return (
    <div className="Specials">
      <div className="Specials-header">
        <h2 className="main-text-title">Specials</h2>
        <button className="Button">Online Menu</button>
      </div>
      <div className="card-container">
        <div className="card-specials">
          <div className="img-wrap-card">
            <img src={CardImage1} alt="cardimage1" />
            <h3 className="special-text-sub1">
              Greek Salad <span className="price-tag">$5.5</span>
            </h3>
            <p className="special-description">
              This comes straight from grandma’s recipe book, every last
              ingredient has been sourced and is as authentic as can be
              imagined.
            </p>
            <a className="special-description" href="">
              Order a Delivery
            </a>
            <div>
              {/* <img scr={FastDeliveryImage} alt="fast delivery icon" /> */}
            </div>
          </div>
        </div>
        <div className="card-specials">
          <div className="img-wrap-card">
            <img src={CardImage2} alt="cardimage1" />
            <h3 className="special-text-sub1">
              Bruchetta <span className="price-tag">$5.5</span>
            </h3>
            <p className="special-description">
              Our Bruschetta is made from grilled bread that has been smeared
              with garlic and seasoned with salt and olive oil.
            </p>
            <a className="special-description" href="">
              Order a Delivery
            </a>
          </div>
        </div>
        <div className="card-specials">
          <div className="img-wrap-card">
            <img src={CardImage3} alt="cardimage1" />

            <h3 className="special-text-sub1">
              Lemon Dessert <span className="price-tag">$5.5</span>
            </h3>
            <p className="special-description">
              The famous greek salad of crispy lettuce, peppers, olives and our
              Chicago style feta cheese, garnished with crunchy garlic and
              rosemary croutons.
            </p>
            <a className="special-description" href="">
              Order a Delivery
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Specials;
