import React, { Component } from "react";
import { Outlet, Link, Routes, Route, BrowserRouter } from "react-router-dom";
import { Homepage } from "./Homepage";
import { BookingPage } from "./BookingPage";

class Nav extends Component {
  constructor(props) {
    super(props);
    this.state = "";
  }

  render() {
    return (
      <nav>
        <div>
          {/* <BrowserRouter>
            <Routes>
               <Route path="/" Component={<Homepage />}></Route>
              <Route path="/booking" Component={<BookingPage />}></Route>
            </Routes>
          </BrowserRouter> */}
        </div>
        <ul {...this.props}>
          <a href="/">Home</a>
          {/* <Link to="/">Home</Link> */}
          <a href="">About</a>
          <a href="">Menu</a>

          <a href="">Reservations</a>
          <a href="">Order Online</a>
          <a href="">Login</a>
        </ul>
      </nav>
    );
  }
}
export default Nav;
