import React from "react";
import { Zoom } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";

import image1 from "../assets/red-velvet-cake.jpg";
import image2 from "../assets/front-view-delicious-chocolate-cake.jpg";
import image3 from "../assets/whipped-cream-chocolate-berries-galore-gourmet-indulgence-generated-by-ai.jpg";

const ZoomInExample = () => {
  const images = [image1, image2, image3];

  return (
    <Zoom scale={1.4} indicators={true}>
      {images.map((each, index) => (
        <div key={index} style={{ width: "100%" }}>
          <img
            style={{ objectFit: "cover", width: "100%" }}
            alt="Slide Image"
            src={each}
          />
        </div>
      ))}
      {/* <img src={image1} /> */}
    </Zoom>
  );
};

export default ZoomInExample;
