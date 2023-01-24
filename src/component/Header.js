import React, { Component } from "react";
import Logo from "../assets/logo.png";

class Header extends Component {
  render() {
    return (
      <header>
        <img src={Logo}></img>
      </header>
    );
  }
}
export default Header;
