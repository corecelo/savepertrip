import React from "react";
import TitleLeft from "./TitleLeft/TitleLeft";
import TitleMid from "./TitleMid/TitleMid";
import TitleRight from "./TitleRight/TitleRight";
import "./titlebarstyle.css";

const TitleBar = () => {
  return (
    <div className="titlebar-wrapper-spt mt-3 d-xl-flex align-items-center d-none">
      <TitleLeft />
      <div className="auth-wrapper-spt d-flex">
        <TitleMid />
        <TitleRight />
      </div>
    </div>
  );
};

export default TitleBar;
