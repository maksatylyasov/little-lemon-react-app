import React, { Children, Component, useState } from "react";
import Logo from "../assets/logo.png";
import MenuIcon from "../assets/menu.png";

const Header = (props) => {
  const [hamburger, setHamburger] = useState(false);

  const showHamburger = hamburger ? "hamburger-icon" : "hamburger-icon";

  const headerIdName = hamburger ? "container-navbar-side" : "header-menu";

  const handleHamburgerClick = () => {
    setHamburger(!hamburger);
  };
  return (
    <>
      <div className={showHamburger}>
        <a className="hamburger" onClick={handleHamburgerClick}>
          <img src={MenuIcon} alt="logo" />
        </a>
        <a className="logo" href="/">
          <img src={Logo} alt="logo" />
        </a>
      </div>

      <header id={headerIdName} {...props}>
        <img className="img-wrap" src={Logo}></img>
        {props.children}
      </header>
    </>
  );
};
export default Header;
