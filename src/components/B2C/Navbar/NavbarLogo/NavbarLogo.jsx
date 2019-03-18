import React from "react";
import "./navbarlogostyle.css";
import logo from "../../../../logo.png";

const NavbarLogo = () => {
  return (
    <div className="logobox-spt d-flex align-items-center justify-content-center flex-column">
      <img src={logo} alt="" />
      <h3>Save Per Trip</h3>
    </div>
  );
};

export default NavbarLogo;
