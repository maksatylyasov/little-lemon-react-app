import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Button from "./Button";
import { useDispatch, useSelector } from "react-redux";
import {
  postItems,
  dummyReducer,
  quantityPlus,
  quantityMinus,
} from "../features/basketItemsSlices";
import { nanoid } from "@reduxjs/toolkit";

const ShoppingCart = (props) => {
  const basketItems = useSelector((state) => state.basketItems);
  console.log("REDUX ITEMS=" + basketItems);

  const dispatch = useDispatch();
  // for (let i = 0; i < 1; i++) dispatch(dummyReducer("DUMMY PARAMETER"));

  let basketProducts = props.addToCartDetails.map((product) => {
    return product;
  });

  console.log("Shopping Cart Page addToCartDetails= " + props.addToCartDetails);

  const [quantity, SetQuantity] = useState(
    props.addToCartDetails.length ? props.addToCartDetails[0].quantity : 1
  );

  const handleCounterClickMinus = (id, productQuantity) => {
    if (quantity > 1) SetQuantity(productQuantity - 1);
    else SetQuantity(1);

    // props.UpdateCardDetail({
    //   id: id,
    //   stock: quantity,
    // });
    console.log("handleMinus element.id= " + id);
  };
  const handleCounterClickPlus = (id, productQuantity) => {
    SetQuantity(productQuantity + 1);
    basketProducts.map((product) =>
      product.id === id
        ? { ...product, quantity: productQuantity + 1 }
        : product
    );

    // props.UpdateCardDetail({
    //   id: id,
    //   stock: quantity,
    // });
    console.log(
      "handlePLUS basketProducts[0].quantity= " + basketProducts[0].quantity
    );
  };

  // useEffect(() => {
  //   console.log("I AM HERE");
  // }, [quantity]);

  return (
    <>
      <h1
        // onClick={() => {
        //   dispatch(dummyReducer("DUMMY PARAMETER"));
        // }}
        style={{ textAlign: "start" }}
      >
        Your Cart
      </h1>
      {basketItems.map((element) => (
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
                <button
                  // handleClick={handleCounterClickMinus}
                  name="-"
                  className="Button"
                  onClick={() => {
                    // handleCounterClickMinus(element.id, element.quantity);
                    dispatch(quantityMinus(element.id));
                  }}
                >
                  -
                </button>
                <p id="counter">{element.quantity}</p>
                <button
                  // handleClick={handleCounterClickPlus}
                  name="+"
                  className="Button"
                  onClick={() => {
                    // handleCounterClickPlus(element.id, element.quantity);
                    // element.quantity = element.quantity + 1;
                    dispatch(quantityPlus(element.id));
                  }}
                >
                  +
                </button>
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
