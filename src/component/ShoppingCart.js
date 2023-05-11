import React, { useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Button from "./Button";

const ShoppingCart = (props) => {
  console.log(props.addToCartDetails);

  const [quantity, SetQuantity] = useState(1);
  // console.log("I AM HERE " + props.addToCartDetails.image);
  const handleCounterClickMinus = () => {
    if (quantity > 1) SetQuantity(quantity - 1);
    else SetQuantity(1);
    // document.getElementById("counter").append = quantity;
  };
  const handleCounterClickPlus = () => {
    SetQuantity(quantity + 1);
    // document.getElementById("counter").append = quantity;
  };
  return (
    <>
      <h1 style={{ textAlign: "start" }}>Your Cart</h1>
      {props.addToCartDetails.map((element) => (
        <section className="shopping-cart">
          <article className="order">
            <img src={element.image} alt="" />
            <div>
              <h2>{element.title}</h2>
              <p>
                $
                {(
                  parseFloat(element.price.replace("$", "")) * element.quantity
                ).toFixed(2)}
              </p>
              <article id="quantity">
                <Button
                  name="-"
                  handleClick={handleCounterClickMinus}
                  className="Button"
                  onClick={handleCounterClickMinus}
                ></Button>
                <p id="counter">{quantity}</p>
                <Button
                  handleClick={handleCounterClickPlus}
                  name="+"
                  className="Button"
                  onClick={handleCounterClickPlus}
                ></Button>
              </article>
            </div>
          </article>
          <article></article>
        </section>
      ))}
    </>
  );
};

export default ShoppingCart;
