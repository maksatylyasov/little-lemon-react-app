import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartPage = (props) => {
  return (
    <>
      <Header className="Header">
        <Nav addToCartLength={props.addToCartLength} className="Nav"></Nav>
      </Header>
      <ShoppingCart addToCartDetails={props.addToCartDetails}></ShoppingCart>
      <Footer />
    </>
  );
};
export default ShoppingCartPage;
