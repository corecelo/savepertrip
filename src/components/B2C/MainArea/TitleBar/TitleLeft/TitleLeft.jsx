import React from "react";
import "./titleleftstyle.css";

const TitleLeft = () => {
  return (
    <div className="currency-wrapper-spt">
      <select>
        <option value="inr">Currency INR</option>
        <option value="inr">Currency USD</option>
        <option value="inr">Currency EUR</option>
        <option value="inr">Currency YAN</option>
      </select>
    </div>
  );
};

export default TitleLeft;
