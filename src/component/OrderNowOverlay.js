import React, { useState } from "react";
import Logo from "../assets/logo.jpg";
import Button from "./Button";

import Popup from "reactjs-popup";

const OrderNowOverlay = (props) => {
  const [open, setOpen] = useState(true);
  const closeModal = () => {
    props.setOverlay(!props.overlay);
  };
  // const closeModal = () => setOverlay(false);
  return (
    <>
      <Popup
        // trigger={<button className="button"> Open Modal </button>}
        open={props.overlay}
        closeOnDocumentClick
        onClose={closeModal}
        // onOpen={setClosing(!closing)}
        // on="click"
        modal
        // disabled={!props.popup}

        nested

        // lockScroll
        // position="right center"
        // offsetY={500}
        // id={props.id}
      >
        {/* <section className="order-now-overlay modal">
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
          <button className="close" onClick={closeModal}>
            &times;
          </button>
        </section> */}
        {(close) => (
          <section className="order-now-overlay modal">
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
            <button className="close" onClick={close}>
              &times;
            </button>
          </section>
        )}
      </Popup>
    </>
  );
};

export default OrderNowOverlay;
