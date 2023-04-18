import React, { Component } from "react";
import image1 from "../assets/person1-review.png";
import image2 from "../assets/person2-review.png";
import image3 from "../assets/person3-review.png";
import { motion } from "framer-motion";

const customers = [
  {
    name: "Jessica Gatsby",
    comment:
      "Absolutely amazing desserts! Cozy atmosphere and friendly staff. Highly recommend this sweet escape for any dessert lover.",
    date: new Date(),
    image: image1,
    rating: 5,
  },
  {
    name: "Jason Babooa",
    comment:
      "Delicious desserts and cozy ambiance! Highly recommend this dessert restaurant for a sweet escape. 🍰🍨 #yum #dessertlover",
    date: new Date(),
    image: image2,
    rating: 5,
  },
  {
    name: "Kathy Simmons",
    comment:
      "Amazing desserts and cozy ambiance! The chocolate cake and homemade ice cream were to die for. Highly recommend this restaurant!",
    date: new Date(),
    image: image3,
    rating: 5,
  },
];
const CustomerSay = () => {
  const customerRating = [];

  customers.forEach((customer) => {
    customerRating.push(
      <article className="review-card">
        <div>
          <img src={customer.image} alt={customer.image} />
        </div>
        <h1>{customer.name}</h1>
        <p>
          <strong className="quote-strong">" </strong>
          {customer.comment}
          <strong className="quote-strong"> "</strong>
        </p>
      </article>
    );
  });
  const container = {
    hidden: { opacity: 0, scale: 0 },
    visible: {
      opacity: 0,
      scale: 1.2,
      transition: {
        duration: 1,
        delayChildren: 5,
        staggerChildren: 5,
      },
    },
  };

  const item = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
    },
  };

  return (
    <motion.section
      variants={container}
      initial="hidden"
      animate="visible"
      whileInView={{ opacity: 1, scale: 1, transition: { duration: 1 } }}
      className="customer-say"
    >
      {customerRating}
    </motion.section>
  );
};
export default CustomerSay;
