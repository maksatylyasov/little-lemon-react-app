import React, { Component, useRef } from "react";
import image1 from "../assets/person1-review.png";
import image2 from "../assets/person2-review.png";
import image3 from "../assets/person3-review.png";
import {
  motion,
  useTime,
  useTransform,
  useMotionValue,
  useAnimationFrame,
} from "framer-motion";

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
  {
    name: "Kathy Simmons",
    comment:
      "Amazing desserts and cozy ambiance! The chocolate cake and homemade ice cream were to die for. Highly recommend this restaurant!",
    date: new Date(),
    image: image3,
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
        <img src={customer.image} alt={customer.image} />

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

  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 1500], // ...rotate 360deg
    { clamp: false }
  );

  var xValue = -500;

  const ref = useRef(null);

  useAnimationFrame((t) => {
    const rotate = Math.sin(t / 10000) * 200;
    const y = (1 + Math.sin(t / 2000)) * -50;
    const y2 = (1 + Math.sin(t / 2000)) * -50;
    const z = [-500, 0, 500];
    ref.current.style.transform = `translateX(${y}px) translateX(${y2}px)`;
  });

  return (
    <>
      <motion.section
        // style={{ rotate }}
        // style={{ opacity }}
        ref={ref}
        variants={container}
        // initial="visible"
        // animate="visible"
        // whileInView={
        //   {
        //     // opacity: 1,
        //     // scale: 1,
        //     // translateX: xValue,
        //     // transition: { duration: 2 },
        //   }
        // }
        className="customer-say"
      >
        {customerRating}
      </motion.section>
    </>
  );
};
export default CustomerSay;
