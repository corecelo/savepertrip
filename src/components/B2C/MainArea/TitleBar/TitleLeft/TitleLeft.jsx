import React from "react";
import { Icon } from "react-icons-kit";
import { briefcase } from "react-icons-kit/fa/briefcase";
import "./titleleftstyle.css";

const TitleLeft = () => {
  return (
    <div className="currency-wrapper-spt">
      <div className="corporate-login-spt d-flex justify-content-center align-items-center">
        <div
          style={{
            width: 16,
            height: 16,
            color: "white",
            marginRight: 10,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={briefcase} />
        </div>
        <p>Corporate Login</p>
      </div>
    </div>
  );
};

export default TitleLeft;
