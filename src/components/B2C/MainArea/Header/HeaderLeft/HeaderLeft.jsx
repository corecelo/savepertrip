import React from "react";
import DomesticForm from "./DomesticForm/DomesticForm";
import "./headerleftstyle.css";
import "react-tabs/style/react-tabs.css";

const HeaderLeft = () => {
  return (
    <div className="headerleft-wrapper-spt px-xl-0 px-lg-5 px-md-5 px-sm-5 px-xs-5">
      <div className="tab-spt">
        <div>
          <DomesticForm />
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
