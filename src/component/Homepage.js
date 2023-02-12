import React from "react";
import Header from "./Header";
import Nav from "./Nav";
import Main from "./Main";
import Footer from "./Footer";

const Homepage = () => {
  return (
    <div>
      {/* HOMEPAGE */}
      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <Main className="Main"></Main>
      <Footer></Footer>
    </div>
  );
};
export default Homepage;
