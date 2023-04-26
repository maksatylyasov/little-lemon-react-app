import React, { useState } from "react";
import Button from "./Button";
import OrderNowOverlay from "./OrderNowOverlay";

const MenusSection = (props) => {
  const [overlay, setOverlay] = useState(false);
  // const overlayTag = <OrderNowOverlay popup={overlay} id="overlay" />;
  const handleClick = () => {
    setOverlay(!overlay);
    // alert("ERROR");
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#495e57" }}>
        Little Lemon Menu
      </h1>

      <section id="menu" className="menu-section">
        {props.children.map((element) => (
          <article className="product" onClick={handleClick}>
            <img src={element.image} alt={element.title}></img>
            <div className="title">
              <h1>{element.title}</h1>
              <Button name="Shop Now" />
            </div>
          </article>
        ))}
      </section>
      <OrderNowOverlay setOverlay={setOverlay} overlay={overlay} id="overlay" />
    </>
  );
};

export default MenusSection;
