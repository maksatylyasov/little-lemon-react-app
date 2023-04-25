import React from "react";
import Button from "./Button";
import OrderNowOverlay from "./OrderNowOverlay";

const MenusSection = (props) => {
  const handleClick = () => {
    // document.getElementById("menu").style.display = "none";
    document.getElementById("overlay").style.display = "flex";
  };
  return (
    <>
      <h1 style={{ textAlign: "center", color: "#495e57" }}>
        Little Lemon Menu
      </h1>

      <section id="menu" onClick={handleClick} className="menu-section">
        {props.children.map((element) => (
          <article className="product">
            <img src={element.image} alt={element.title}></img>
            <div className="title">
              <h1>{element.title}</h1>
              <Button name="Shop Now" />
            </div>
          </article>
        ))}
      </section>
      {/* <OrderNowOverlay id="overlay" /> */}
    </>
  );
};

export default MenusSection;
