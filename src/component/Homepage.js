import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";
import Newsletter from "./Newsletter";

const Homepage = (props) => {
  return (
    <div>
      <Header className="Header">
        <Nav addToCartLength={props.addToCartLength} className="Nav"></Nav>
      </Header>
      <Main className="Main"></Main>
      <Newsletter />
      <Footer></Footer>
    </div>
  );
};
export default Homepage;
