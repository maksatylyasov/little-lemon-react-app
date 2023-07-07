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
import ShoppingCartItem from "./ShoppingCartItem";

import { priceCounter } from "../features/basketTotalPrice";

const ShoppingCart = (props) => {
  const [alignment, setAlignment] = React.useState("left");

  // const total = React.useRef(0);

  const handleAlignment = (event, newAlignment) => {
    setAlignment(newAlignment);
  };
  const totalBasketPrice = useSelector(priceCounter);
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
  const [totalBasket, SetTotalBasket] = useState(0);

  useEffect(() => {
    let total = 0;
    basketItems.map((element) => (total += parseFloat(element.totalPrice)));
    SetTotalBasket(total.toFixed(2));
    console.log("BREAKPOINT inside useEffect totalBasket= " + totalBasket);
  });

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
      <section className="cart-page">
        <section className="shopping-cart-page">
          {basketItems.map((element) => (
            <ShoppingCartItem>{element}</ShoppingCartItem>
          ))}
        </section>
        {/* <ShoppingCartItem>{basketItems[1]}</ShoppingCartItem> */}
        <section style={basketItems.length ? {} : { display: "none" }}>
          <ShoppingCartPriceDetails
            totalPrice={parseFloat(totalBasket)}
          ></ShoppingCartPriceDetails>
        </section>
      </section>
    </>
  );
};

export default ShoppingCart;
