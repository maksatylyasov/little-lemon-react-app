import React, { useState, useRef } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import image1 from "../assets/red-velvet-cake.jpg";
import image2 from "../assets/front-view-delicious-chocolate-cake.jpg";
import image3 from "../assets/whipped-cream-chocolate-berries-galore-gourmet-indulgence-generated-by-ai.jpg";
import { motion, useTime, useTransform, useInView } from "framer-motion";

const ZoomInExample = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });
  const inViewAnimationLeft = {
    // transform: isInView ? "none" : "translateX(-200px)",
    opacity: isInView ? 1 : 0,
    transition: "all 0.9s cubic-bezier(0.17, 0.55, 0.55, 1) 1s",
    width: "100%",
  };

  const images = [
    { image: image1, title: "Red Velvet Cake" },
    { image: image2, title: "Chocolate Cake" },
    { image: image3, title: "Whipped Cream Chocolate Berries" },
  ];

  const titleStyle = {
    position: "absolute",
    color: "#f4ce14",
    backgroundColor: "#495e57",
    top: "50%",
    left: "25%",
    right: "25%",
    textAlign: "center",
  };
  const [hoverStyle, setHoverStyle] = useState({
    opacity: "80%",
  });

  return (
    <motion.div ref={ref} style={inViewAnimationLeft}>
      <Zoom scale={1.4} indicators={true}>
        {images.map((each, index) => (
          <div key={index}>
            <h2
              onClick={() => {}}
              onMouseEnter={() => {
                setHoverStyle({
                  opacity: "100%",
                });
              }}
              onMouseLeave={() => {
                setHoverStyle({
                  opacity: "80%",
                });
              }}
              style={{
                ...titleStyle,
                opacity: hoverStyle.opacity,
              }}
            >
              {each.title}
            </h2>
            <img
              style={{ objectFit: "cover", width: "100%" }}
              alt="Slide Image"
              src={each.image}
            />
          </div>
        ))}
        {/* <img src={image1} /> */}
      </Zoom>
    </motion.div>
  );
};

export default ZoomInExample;
