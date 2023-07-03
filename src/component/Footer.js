import React, { Component } from "react";
import Logo from "../assets/logo.jpg";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
import PlaceIcon from "@mui/icons-material/Place";
import HomeIcon from "@mui/icons-material/Home";
import InfoIcon from "@mui/icons-material/Info";
import RestaurantIcon from "@mui/icons-material/Restaurant";
import BookOnlineIcon from "@mui/icons-material/BookOnline";
import LoginIcon from "@mui/icons-material/Login";
import ShoppingCartCheckoutIcon from "@mui/icons-material/ShoppingCartCheckout";

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
            <HomeIcon fontSize="small"></HomeIcon> Home
          </a>
          <a className="hero-description" href="">
            <InfoIcon fontSize="small"></InfoIcon> About
          </a>
          <a className="hero-description" href="">
            <RestaurantIcon fontSize="small"></RestaurantIcon> Menu
          </a>
          <a className="hero-description" href="">
            <BookOnlineIcon fontSize="small"></BookOnlineIcon> Reservations
          </a>
          <a className="hero-description" href="">
            <ShoppingCartCheckoutIcon fontSize="small"></ShoppingCartCheckoutIcon>{" "}
            Order Online
          </a>
          <a className="hero-description" href="">
            <LoginIcon fontSize="small"></LoginIcon> Login
          </a>
        </div>
      </div>
      <div>
        <div className="footer-nav">
          <h2>Contact</h2>
          <a className="hero-description" href="">
            <PlaceIcon></PlaceIcon> Address
          </a>
          <a className="hero-description" href="">
            <PhoneIcon></PhoneIcon> Phone
          </a>
          <a className="hero-description" href="">
            <EmailIcon></EmailIcon> Email
          </a>
        </div>
      </div>
      <div>
        <div className="footer-nav-social">
          <h2>Social Media</h2>
          <div>
            <a className="hero-description" href="">
              <FacebookIcon fontSize="large"></FacebookIcon>
            </a>
            <a className="hero-description" href="">
              <InstagramIcon fontSize="large"></InstagramIcon>
            </a>
            <a className="hero-description" href="">
              <TwitterIcon fontSize="large"></TwitterIcon>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
export default Footer;
