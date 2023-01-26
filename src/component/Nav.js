import React, { Component } from "react";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <nav>
        <ul {...this.props}>
          <a classname="App-link" href="">
            Home
          </a>

          <a href="">About</a>

          <a href="">Contact Us</a>
        </ul>
      </nav>
    );
  }
}
export default Nav;
