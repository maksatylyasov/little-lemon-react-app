import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";

import { Routes, Route, BrowserRouter } from "react-router-dom";
import { Homepage } from "./component/Homepage";
import { BookingPage } from "./component/BookingPage";
import CallToAction from "./component/CallToAction";
import Specials from "./component/Specials";
import CustomerSay from "./component/CustomersSay";
import Chicago from "./component/Chicago";

function App() {
  return (
    <>
      <meta
        name="description"
        content="Experience delicious, authentic cuisine at our restaurant. Our menu features a variety of dishes made with fresh, locally sourced ingredients. Join us for lunch, dinner or weekend brunch. Reservations recommended."
      />
      <meta name="og:title" content="Little Lemon Reastaurant" />
      <meta
        name="og:description"
        content="Experience delicious, authentic cuisine at our restaurant. Our menu features a variety of dishes made with fresh, locally sourced ingredients. Join us for lunch, dinner or weekend brunch. Reservations recommended."
      />
      <meta name="og:image" content="lemon logo" />

      <div>
        <BrowserRouter>
          <Routes>
             <Route path="/" Component={Homepage}></Route>
            <Route path="/booking" Component={BookingPage}></Route>
          </Routes>
        </BrowserRouter>
      </div>

      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <Main className="Main"></Main>

      <Footer></Footer>
    </>
  );
}

export default App;
