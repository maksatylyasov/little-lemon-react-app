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
          <h2>About Us</h2>
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
          <h2>Contact</h2>
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
          <h2>Social Media</h2>
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
