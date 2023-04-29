import React, { Component } from "react";
import CardImage1 from "../assets/greek-salad.jpg";
import CardImage2 from "../assets/lemon-dessert.jpg";
import CardImage3 from "../assets/bruschetta.jpg";
import FastDeliveryImage from "../assets/fast-delivery.jpg";
import { motion } from "framer-motion";

import image from "../assets/chocolate-cake.jpg";
import image2 from "../assets/caramel-cake-chocolate.jpg";
import image3 from "../assets/red-velvet-cheesecake-wooden-table-cafe.jpg";
import image4 from "../assets/close-up-shot-homemade-salted-caramel-cream-brownie-toffee.jpg";
import image5 from "../assets/Coconut-Cream-Pie.jpg";
import image6 from "../assets/Peanut-Butter-Cupcake.jpg";

const products = [
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

const Specials = () => {
  return (
    <div>
      <div className="Specials-header">
        <h2 className="main-text-title">Specials</h2>
        <button className="Button">Online Menu</button>
      </div>
      <div className="card-container">
        {products.map((product) => (
          <motion.div whileHover={{ scale: 1.05 }} className="card-specials">
            <img src={product.image} alt="cardimage1" />
            <h3 className="special-text-sub1">
              {product.title} <span className="price-tag">{product.price}</span>
            </h3>
            <p className="special-description">{product.description}</p>
            <a className="special-description" href="">
              Order a Delivery
            </a>
            <div>
              {/* <img scr={FastDeliveryImage} alt="fast delivery icon" /> */}
            </div>
          </motion.div>
        ))}
        {/* <div className="card-specials">
          <div className="img-wrap-card">
            <img src={CardImage2} alt="cardimage1" />
          </div>
          <h3 className="special-text-sub1">
            Bruchetta <span className="price-tag">$5.5</span>
          </h3>
          <p className="special-description">
            Our Bruschetta is made from grilled bread that has been smeared with
            garlic and seasoned with salt and olive oil.
          </p>
          <a className="special-description" href="">
            Order a Delivery
          </a>
        </div>
        <div className="card-specials">
          <div className="img-wrap-card">
            <img src={CardImage3} alt="cardimage1" />
          </div>

          <h3 className="special-text-sub1">
            Lemon Dessert <span className="price-tag">$5.5</span>
          </h3>
          <p className="special-description">
            The famous greek salad of crispy lettuce, peppers, olives and our
            Chicago style feta cheese, garnished with crunchy garlic and
            rosemary croutons.
          </p>
          <a className="special-description" href="">
            Order a Delivery
          </a>
        </div> */}
      </div>
    </div>
  );
};
export default Specials;
