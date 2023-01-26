import "./App.css";
import Header from "./component/Header";
import Nav from "./component/Nav";
import Main from "./component/Main";
import Footer from "./component/Footer";

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
      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>

      <Main className="Main"></Main>
      <Footer></Footer>
    </>
  );
}

export default App;
