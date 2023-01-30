import React, { Component } from "react";
import Logo from "../assets/logo.jpg";

const Footer = () => {
  return (
    <footer className="Footer">
      <div className="img-wrap-footer">
        <img src={Logo}></img>
      </div>
      <div>
        <div className="footer-nav">
          About Us
          <div>
            <br />
          </div>
          <a className="hero-description" href="">
            Home
          </a>
          <a className="hero-description" href="">
            About
          </a>
          <a className="hero-description" href="">
            Menu
          </a>
          <a className="hero-description" href="">
            Reservations
          </a>
          <a className="hero-description" href="">
            Order Online
          </a>
          <a className="hero-description" href="">
            Login
          </a>
        </div>
      </div>
      <div>
        <div className="footer-nav">
          Contact
          <div>
            <br />
          </div>
          <a className="hero-description" href="">
            Address
          </a>
          <a className="hero-description" href="">
            Phone Number
          </a>
          <a className="hero-description" href="">
            Email
          </a>
        </div>
      </div>
      <div>
        <div className="footer-nav">
          Social Media
          <div>
            <br />
          </div>
          <a className="hero-description" href="">
            Address
          </a>
          <a className="hero-description" href="">
            Phone Number
          </a>
          <a className="hero-description" href="">
            Email
          </a>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
