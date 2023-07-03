import React, { useEffect, useState } from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import Button from "./Button";
import { useDispatch, useSelector, shallowEqual } from "react-redux";
import {
  postItems,
  dummyReducer,
  quantityPlus,
  quantityMinus,
} from "../features/basketItemsSlices";

import { updateTotalPrice } from "../features/basketTotalPrice";
import { nanoid } from "@reduxjs/toolkit";

import QueryBuilderIcon from "@mui/icons-material/QueryBuilder";

import Box from "@mui/material/Box";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import InputAdornment from "@mui/material/InputAdornment";
import FormControl from "@mui/material/FormControl";
import TextField from "@mui/material/TextField";
import AccountCircle from "@mui/icons-material/AccountCircle";
import LocalOfferIcon from "@mui/icons-material/LocalOffer";

import FormatAlignLeftIcon from "@mui/icons-material/FormatAlignLeft";
import FormatAlignCenterIcon from "@mui/icons-material/FormatAlignCenter";
import FormatAlignRightIcon from "@mui/icons-material/FormatAlignRight";
import FormatAlignJustifyIcon from "@mui/icons-material/FormatAlignJustify";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";

import ShoppingCartPriceDetails from "./ShoppingCartPriceDetails";

const ShoppingCart = (props) => {
  const [alignment, setAlignment] = React.useState("left");

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const totalBasketPrice = useSelector((state) => state.totalPrice.value);
  const basketItems = useSelector((state) => state.basketItems);

  console.log("REDUX ITEMS=" + basketItems);
  console.log("TOTAL BASKET PRICE= " + totalBasketPrice);

  const dispatch = useDispatch();
  // for (let i = 0; i < 1; i++) dispatch(dummyReducer("DUMMY PARAMETER"));

  let basketProducts = props.addToCartDetails.map((product) => {
    return product;
  });

  console.log("Shopping Cart Page addToCartDetails= " + props.addToCartDetails);

  const [quantity, SetQuantity] = useState(
    props.addToCartDetails.length ? props.addToCartDetails[0].quantity : 1
  );
  const [totalPrice, SettotalPrice] = useState(0);

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
      <section className="shopping-cart-page">
        {basketItems.map((element) => (
          <section className="shopping-cart">
            <article className="order">
              <img src={element.image} alt="" />
              <div>
                <h2>{element.title}</h2>
                <p id="totalPrice">
                  $
                  {(
                    parseFloat(element.price.replace("$", "")) *
                    element.quantity
                  ).toFixed(2)}
                </p>
                <p>{element.totalPrice}</p>
                <p>{totalBasketPrice}</p>
                <article id="quantity">
                  <button
                    // handleClick={handleCounterClickMinus}
                    name="-"
                    className="Button"
                    onClick={() => {
                      // handleCounterClickMinus(element.id, element.quantity);
                      // SettotalPrice(element.totalPrice);

                      dispatch(quantityMinus(element.id));
                      dispatch(updateTotalPrice(element.totalPrice));
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
                      // SettotalPrice(element.totalPrice);

                      dispatch(quantityPlus(element.id));
                      dispatch(updateTotalPrice(element.totalPrice));
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

        <section style={basketItems.length ? {} : { display: "none" }}>
          <ShoppingCartPriceDetails
          // totalPrice={totalBasketPrice}
          ></ShoppingCartPriceDetails>
        </section>
      </section>
    </>
  );
};

export default ShoppingCart;
