import React, { Component, useRef } from "react";
import HeroImage from "../assets/restauranfood.jpg";
import { motion, useTime, useTransform, useInView } from "framer-motion";

const CallToAction = (props) => {
  const textAnimate = {
    hidden: { opacity: 0, scaleY: 0 },
    visible: {
      opacity: 1,
      scaleY: 1,
      translate: 100,
      transition: {
        duration: 5,
        delayChildren: 5,
        staggerChildren: 5,
      },
    },
  };

  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const time = useTime();
  const rotate = useTransform(
    time,
    [0, 4000], // For every 4 seconds...
    [0, 360], // ...rotate 360deg
    { clamp: false }
  );
  const inViewAnimationLeft = {
    transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 0.5s",
  };
  const inViewAnimationBottom = {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
  };
  const inViewAnimationRight = {
    transform: isInView ? "none" : "translateX(600px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1.5s",
  };
  const inViewAnimationTop = {
    transform: isInView ? "none" : "translateY(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2s",
  };
  const inViewAnimationBottomLate = {
    transform: isInView ? "none" : "translateY(200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 2.5s",
  };

  return (
    <motion.div ref={ref} style={inViewAnimationLeft} className="CallToAction">
      <div>
        <motion.h2
          ref={ref}
          style={inViewAnimationLeft}
          className="Header-text"
        >
          Little Lemon
        </motion.h2>
        <motion.h3
          ref={ref}
          style={inViewAnimationRight}
          className="Header-text-sub1"
        >
          Chicago
        </motion.h3>

        <motion.p
          ref={ref}
          style={inViewAnimationBottom}
          className="hero-description"
        >
          Our restaurant offers a wide variety of delicious dishes to suit every
          taste. We use only the freshest ingredients and traditional cooking
          techniques to bring you authentic flavors from around the world.
          Whether you're in the mood for a hearty pasta dish or a light salad,
          you'll find something you love on our menu. We also have a full bar
          with a selection of wine and beer to complement your meal. Come dine
          with us and experience the true taste of culinary excellence.
        </motion.p>
        <motion.div ref={ref} style={inViewAnimationTop}>
          <img className="img-wrap-hero" src={HeroImage} alt="hero images" />
        </motion.div>
        <motion.button
          whileHover={{ scale: 1.1 }}
          ref={ref}
          style={inViewAnimationBottomLate}
          className="Button"
        >
          Reserve a Table
        </motion.button>
      </div>
      <motion.div ref={ref} style={inViewAnimationTop}>
        <img
          id="image-for-hq"
          className="img-wrap-hero"
          src={HeroImage}
          alt="hero images"
        />
      </motion.div>
    </motion.div>
  );
};
export default CallToAction;
