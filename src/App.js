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
      <script src="https://raw.githubusercontent.com/Meta-Front-End-Developer-PC/capstone/master/api.js"></script>
      {/* <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <Main className="Main"></Main>
      <Footer></Footer> */}
      {/* <Homepage /> */}
      <Routes>
        <Route path="/" element={<Homepage header="Home" />}>
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route path="/about" element={<AboutPage />}>
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
        <Route path="/reservation" element={<BookingPage />}>
          {/* <Route path="contactme" element={<ContactMe />} /> */}
        </Route>
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
