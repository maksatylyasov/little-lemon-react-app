import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Nav from "./Nav";
import HighLightProduct from "./HighlightProduct";

import image from "../assets/chocolate-cake.jpg";
import image2 from "../assets/caramel-cake-chocolate.jpg";
import image3 from "../assets/red-velvet-cheesecake-wooden-table-cafe.jpg";
import image4 from "../assets/close-up-shot-homemade-salted-caramel-cream-brownie-toffee.jpg";
import image5 from "../assets/Coconut-Cream-Pie.jpg";
import image6 from "../assets/Peanut-Butter-Cupcake.jpg";

import FeaturedItems from "./FeaturedItems";
import MenusSection from "./MenusSection";
import OrderNowOverlay from "./OrderNowOverlay";

const products = [
  {
    id: "1",
    title: "Chocolate Cake",
    description:
      "Indulge in our Decadent Chocolate Cake - a rich, moist chocolate cake topped with creamy chocolate frosting. Perfect for satisfying your chocolate cravings.",
    image: image,
    price: "$21.99",
  },
  {
    id: "2",
    title: "Caramel Cake Chocolate",
    description:
      "Treat yourself to our heavenly Caramel Chocolate Cake - a luscious chocolate cake layered with silky caramel frosting, drizzled with chocolate ganache. Pure decadence in every bite.",
    image: image2,
    price: "$21.99",
  },
  {
    id: "3",
    title: "Red Velvet Cheesecake",
    description:
      "Experience pure indulgence with our Red Velvet Cheesecake - a velvety smooth cheesecake on top of a rich red velvet cake, topped with creamy frosting and a sprinkle of cocoa powder.",
    image: image3,
    price: "$21.99",
  },
  {
    id: "4",
    title: "Salted Caramel Brownie",
    description:
      "Satisfy your sweet and salty cravings with our Salted Caramel Brownie - a gooey, fudgy brownie topped with a layer of rich salted caramel sauce and a sprinkle of sea salt.",
    image: image4,
    price: "$21.99",
  },
  {
    id: "5",
    title: "Coconut Cream Pie",
    description:
      "Transport yourself to a tropical paradise with our Coconut Cream Pie - a buttery crust filled with creamy coconut custard and topped with whipped cream and toasted coconut flakes.",
    image: image5,
    price: "$21.99",
  },
  {
    id: "6",
    title: "Peanut Butter Cupcake",
    description:
      "Get your peanut butter fix with our Peanut Butter Cupcake - a fluffy vanilla cupcake filled with a rich peanut butter filling and topped with creamy peanut butter frosting.",
    image: image6,
    price: "$21.99",
  },
];

const MenuPage = () => {
  return (
    <>
      <Header className="Header">
        <Nav className="Nav"></Nav>
      </Header>
      <section id="menu-page">
        <HighLightProduct>{products[0]}</HighLightProduct>
        <FeaturedItems>{products}</FeaturedItems>
        <MenusSection>{products}</MenusSection>
      </section>
      <Footer />
    </>
  );
};

export default MenuPage;
