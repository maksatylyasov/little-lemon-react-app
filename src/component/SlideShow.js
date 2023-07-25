import React, { useState } from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import image1 from "../assets/red-velvet-cake.jpg";
import image2 from "../assets/front-view-delicious-chocolate-cake.jpg";
import image3 from "../assets/whipped-cream-chocolate-berries-galore-gourmet-indulgence-generated-by-ai.jpg";
import { Scale } from "@mui/icons-material";

const ZoomInExample = () => {
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
    <Zoom scale={1.4} indicators={true}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
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
  );
};

export default ZoomInExample;
