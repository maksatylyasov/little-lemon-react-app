import React from "react";
import newsIcon from "../assets/newsletter.png";
const Newsletter = () => {
  return (
    <>
      <form className="newsletter">
        <p>
          Stay in the loop! Subscribe to our newsletter for exclusive updates,
          promotions, and insider news on our latest products and services.
        </p>
        <section id="subscription-form">
          <div>
            <img src={newsIcon} />
          </div>
          <input name="email" type="email" placeholder="email"></input>
          <button className="Button2" type="submit">
            Subscribe
          </button>
        </section>
      </form>
    </>
  );
};

export default Newsletter;
