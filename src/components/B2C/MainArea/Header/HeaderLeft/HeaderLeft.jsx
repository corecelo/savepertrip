import React from "react";
import DomesticForm from "./DomesticForm/DomesticForm";
import "./headerleftstyle.css";
import "react-tabs/style/react-tabs.css";

const HeaderLeft = () => {
  return (
    <div className="headerleft-wrapper-spt">
      <div className="tab-spt">
        <div>
          <DomesticForm />
        </div>
      </div>
    </div>
  );
};

export default HeaderLeft;
