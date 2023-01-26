import React, { Children, Component } from "react";
import Logo from "../assets/logo.png";

class Header extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <header {...this.props}>
        <img src={Logo}></img>
        {this.props.children}
      </header>
    );
  }
}
export default Header;
