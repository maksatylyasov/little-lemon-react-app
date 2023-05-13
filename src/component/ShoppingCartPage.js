import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Footer from "./Footer";
import ShoppingCart from "./ShoppingCart";

const ShoppingCartPage = (props) => {
  const UpdateCardDetail = (cart) => {
    props.UpdateCardDetail(cart);
  };

  return (
    <>
      <Header className="Header">
        <Nav addToCartLength={props.addToCartLength} className="Nav"></Nav>
      </Header>
      <ShoppingCart
        addToCartDetails={props.addToCartDetails}
        UpdateCardDetail={UpdateCardDetail}
      ></ShoppingCart>
      <Footer />
    </>
  );
};
export default ShoppingCartPage;
