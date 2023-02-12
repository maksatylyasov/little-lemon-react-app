import React, { Component } from "react";
import * as ReactDOM from "react-dom";
import Homepage from "./Homepage";
import App from "../App";

const Home = () => {
  ReactDOM.render(<App />, document.getElementById("app"));
  return <div></div>;
};

export default Home;
