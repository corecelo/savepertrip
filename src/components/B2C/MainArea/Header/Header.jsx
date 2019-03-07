import React from "react";
import "./headerstyle.css";
import HeaderLeft from "./HeaderLeft/HeaderLeft";
import HeaderRight from "./HeaderRight/HeaderRight";

const Header = () => {
  return (
    <div className="header-wrapper-spt mt-3 d-flex justify-content-between">
      <HeaderLeft />
      <HeaderRight />
    </div>
  );
};

export default Header;
