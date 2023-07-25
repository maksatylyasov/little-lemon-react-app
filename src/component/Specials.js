import React, { Component, useRef } from "react";
import CardImage1 from "../assets/greek-salad.jpg";
import CardImage2 from "../assets/lemon-dessert.jpg";
import CardImage3 from "../assets/bruschetta.jpg";
import FastDeliveryImage from "../assets/fast-delivery.jpg";
import { motion, useTime, useTransform, useInView } from "framer-motion";

import image from "../assets/chocolate-cake.jpg";
import image2 from "../assets/caramel-cake-chocolate.jpg";
import image3 from "../assets/red-velvet-cheesecake-wooden-table-cafe.jpg";
import image4 from "../assets/close-up-shot-homemade-salted-caramel-cream-brownie-toffee.jpg";
import image5 from "../assets/Coconut-Cream-Pie.jpg";
import image6 from "../assets/Peanut-Butter-Cupcake.jpg";
import ProductCard from "./ProductCard";
import ItemCard from "./ItemCard";

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
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const inViewAnimationLeft = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  const inViewAnimationLeftLate = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
  };
  return (
    <motion.div className="highlight">
      <motion.div
        ref={ref}
        style={inViewAnimationLeft}
        className="Specials-header"
      >
        <h2 className="main-text-title">Specials</h2>
        <button className="Button">Online Menu</button>
      </motion.div>
      {/* <div className="card-container">
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
          </motion.div>
        ))}
      </div> */}
      <motion.div
        ref={ref}
        style={inViewAnimationLeftLate}
        className="card-container"
      >
        {products.map((product) => (
          // <ProductCard product={product} />
          <ItemCard product={product} />
        ))}
      </motion.div>
    </motion.div>
  );
};
export default Specials;
