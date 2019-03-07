import React from "react";
import { Col } from "reactstrap";

// CSS Import
import "./navbarstyle.css";

// Component Import
import NavbarLogo from "./NavbarLogo/NavbarLogo";
import NavbarItem from "./NavbarItem/NavbarItem";
import NavbarFooter from "./NavbarFooter/NavbarFooter";

const Navbar = () => {
  return (
    <>
      <Col
        md="3"
        className="navbar-wrapper-spt d-flex flex-column align-items-center"
      >
        <NavbarLogo />

        <NavbarItem />

        <NavbarFooter />
      </Col>
    </>
  );
};

export default Navbar;
