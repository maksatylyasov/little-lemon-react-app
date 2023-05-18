import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";

import {
  Routes,
  Route,
  BrowserRouter as Router,
  Switch,
} from "react-router-dom";
import Homepage from "./component/Homepage";
import AboutPage from "./component/AboutPage";
import BookingPage from "./component/BookingPage";
import CallToAction from "./component/CallToAction";
import Specials from "./component/Specials";
import CustomerSay from "./component/CustomersSay";
import Chicago from "./component/Chicago";

import * as ReactDOM from "react-dom";
import MenuPage from "./component/MenuPage";
import ProductLandingPage from "./component/ProductLandingPage";
import ShoppingCartPage from "./component/ShoppingCartPage";
import { useState, useEffect } from "react";

function App() {
  const [addToCartDetails, SetAddToCartDetails] = useState([]);
  const [effectTrigger, setEffectTrigger] = useState(false);
  const [basket, SetBasket] = useState({});

  const AddCartDetails = (cart) => {
    // SetBasket(cart);
    SetAddToCartDetails([...addToCartDetails, cart]);

    setEffectTrigger(!effectTrigger);
  };

  // useEffect(() => {
  //   SetAddToCartDetails([...addToCartDetails, cart]);
  //   console.log("app.js page addToCartDetails= " + addToCartDetails[0]);
  // }, [effectTrigger]);

  const UpdateCardDetail = (cart) => {
    setEffectTrigger(!effectTrigger);
    SetAddToCartDetails(
      addToCartDetails.map((product) =>
        product.id === cart.id ? { ...product, quantity: cart.stock } : product
      )
    );

    console.log("UpdateCardDetails=  " + cart.id + " " + cart.stock);
  };

  useEffect(() => {
    if (addToCartDetails.length > 0)
      console.log(
        "app.js page addToCartDetails Quantity[0]= " +
          addToCartDetails[0].quantity
      );
    console.log(
      "app.js page addToCartDetails length= " + addToCartDetails.length
    );
    for (let product in addToCartDetails)
      console.log(
        "app.js page addToCartDetails= " + addToCartDetails[product].title
      );
  }, [effectTrigger]);
  // var addToCartDetails = {
  //   title: "",
  //   price: "",
  //   quantity: 0,
  //   image: "",
  // };
  let testData = "TEST DATA INSIDE";

  let addToCartLength = addToCartDetails.length;
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
      <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
      {/* <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <Main className="Main"></Main>
      <Footer></Footer> */}
      {/* <Homepage /> */}

      <Routes>
        <Route
          path="/"
          element={<Homepage addToCartLength={addToCartLength} header="Home" />}
        >
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route
          path="/about"
          element={<AboutPage addToCartLength={addToCartLength} />}
        >
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route
          path="/reservation"
          element={<BookingPage addToCartLength={addToCartLength} />}
        >
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route
          path="/menu"
          element={<MenuPage addToCartLength={addToCartLength} />}
        >
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route
          path="/order-online"
          element={
            <ProductLandingPage
              addToCartLength={addToCartLength}
              AddCartDetails={AddCartDetails}
            />
          }
        >
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route
          path="/product-landing-page"
          element={
            <ProductLandingPage
              addToCartLength={addToCartLength}
              AddCartDetails={AddCartDetails}
            ></ProductLandingPage>
          }
        >
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route
          path="/shopping-cart"
          element={
            <ShoppingCartPage
              addToCartLength={addToCartLength}
              addToCartDetails={addToCartDetails}
              UpdateCardDetail={UpdateCardDetail}
            />
          }
        ></Route>
        {/* <Route
          path="/contactme"
          element={<ContactMePage header="ContactMePage" />}
        />
        <Route
          path="/certificates"
          element={<CertificatePage header="CertificatePage" />}
        />
        <Route path="/about" element={<AboutPage header="AboutPage" />} />
        <Route
          path="/portfolio"
          element={<PortfolioPage header="PortfolioPage" />}
        /> */}
      </Routes>
      {/* <BookingPage></BookingPage> */}
    </>
  );
}

export default App;
