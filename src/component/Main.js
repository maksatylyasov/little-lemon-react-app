import React, { Component } from "react";

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return <main {...this.props}>Main</main>;
  }
}
export default Main;
