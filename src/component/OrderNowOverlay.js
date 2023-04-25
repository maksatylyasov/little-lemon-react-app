import React from "react";
import Logo from "../assets/logo.jpg";
import Button from "./Button";

const OrderNowOverlay = (props) => {
  return (
    <>
      <section id={props.id} className="order-now-overlay">
        <img src={Logo} alt="logo" />
        <form>
          <label htmlFor="address">Enter Delivery Address</label>
          <input
            id="address"
            type="text"
            placeholder="Delivery Address"
          ></input>
          <input
            type="text"
            placeholder="Apt, Floor, Suite, etc (Optional)"
          ></input>
          <Button name="View Menu" />
        </form>
      </section>
    </>
  );
};

export default OrderNowOverlay;
