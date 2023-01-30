import React, { Component } from "react";
import {
  Outlet,
  Link,
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import Homepage from "./Homepage";
import BookingPage from "./BookingPage";
import Footer from "./Footer";

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
        <Router>
          <Routes>
            <Route path="/home" element={<Homepage />} />
            <Route path="/booking" element={<BookingPage />} />
          </Routes>

          <ul {...this.props}>
            {/* <a href="/">Home</a> */}
            <Link to="/home">Home</Link>
            <a href="">About</a>
            <a href="">Menu</a>

            {/* <a href="">Reservations</a> */}
            <Link to="/booking">Reservations</Link>
            <a href="">Order Online</a>
            <a href="">About</a>
          </ul>
        </Router>
      </nav>
    );
  }
}
export default Nav;
