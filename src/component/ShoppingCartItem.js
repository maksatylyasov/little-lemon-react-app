import React, { useEffect, useState } from "react";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  postItems,
  dummyReducer,
  quantityPlus,
  quantityMinus,
} from "../features/basketItemsSlices";

import { updateTotalPrice } from "../features/basketTotalPrice";

const ShoppingCartItem = (props) => {
  // const [totalPrice, setTotalPrice] = useState(0);
  const dispatch = useDispatch();
  return (
    <>
      <section className="shopping-cart">
        <img src={props.children.image} alt="" />
        <div>
          <h2>{props.children.title}</h2>
          <p>
            $
            {(
              parseFloat(props.children.price.replace("$", "")) *
              props.children.quantity
            ).toFixed(2)}
          </p>
          {/* <p id="totalPrice">{props.children.totalPrice}</p> */}
          {/* <p>{totalBasketPrice}</p> */}
          <article id="quantity">
            <button
              // name="-"
              className="Button"
              onClick={() => {
                console.log(
                  "BEFORE QUANTITY MINUS DISPATCH= " + props.children.totalPrice
                );
                dispatch(quantityMinus(props.children.id));
                console.log(
                  "BEFORE TOTAL PRICE DISPATCH= " + props.children.totalPrice
                );
                dispatch(updateTotalPrice(props.children.totalPrice));
                let basketTotal = document.getElementById("totalPrice").value;
                console.log("basketTotal= " + basketTotal);
              }}
            >
              -
            </button>
            <p id="counter">{props.children.quantity}</p>
            <button
              // handleClick={handleCounterClickPlus}
              // name="+"
              className="Button"
              onClick={() => {
                console.log(
                  "BEFORE QUANTITY PLUS DISPATCH= " + props.children.totalPrice
                );
                dispatch(quantityPlus(props.children.id));
                console.log(
                  "BEFORE TOTAL PRICE DISPATCH= " + props.children.totalPrice
                );
                dispatch(updateTotalPrice(props.children.totalPrice));
              }}
            >
              +
            </button>
          </article>
        </div>
        <article></article>
      </section>
    </>
  );
};

export default ShoppingCartItem;
