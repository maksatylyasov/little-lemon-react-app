import React, { Component } from "react";
import {
  Outlet,
  Link,
  Routes,
  Route,
  Switch,
  BrowserRouter as Router,
} from "react-router-dom";
import Home from "./Home";
import BookingPage from "./BookingPage";
import About from "./About";
import Footer from "./Footer";
import ConfirmedBooking from "./ConfirmedBooking";
import App from "../App";
import * as ReactDOM from "react-dom";

// const root = ReactDOM.createRoot(document.getElementById("root"));
class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <nav>
        {/* <Router> */}
        {/* <Routes> */}
        {/* <Route path="/" element={<App></App>} /> */}
        {/* <Route path="/home" element={<Home />} /> */}
        {/* <Route exact path="/booking" element={<BookingPage />} /> */}
        {/* <Route exact path="/about" element={<About></About>} /> */}
        {/* <Route path="/submitted" element={<ConfirmedBooking />} /> */}
        {/* </Routes> */}

        <ul {...this.props}>
          {/* <a href="/">Home</a> */}
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          {/* <a href="">About</a> */}
          {/* <a href="">Menu</a> */}
          <Link to="/menu">Menu</Link>
          {/* <a href="">Reservations</a> */}
          <Link to="/reservation">Reservations</Link>
          <a href="">Order Online</a>
          {/* <a href="">About</a> */}
        </ul>
        {/* </Router> */}
      </nav>
    );
  }
}
export default Nav;
