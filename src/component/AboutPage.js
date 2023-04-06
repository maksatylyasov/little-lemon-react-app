import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";

const AboutPage = () => {
  return (
    <>
      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      About section
      <Footer />
    </>
  );
};

export default AboutPage;
