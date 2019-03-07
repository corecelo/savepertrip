import React from "react";
import { Icon } from "react-icons-kit";
import { ic_message } from "react-icons-kit/md/ic_message";
import { ic_arrow_drop_down } from "react-icons-kit/md/ic_arrow_drop_down";
import "./titlebarstyle.css";

const TitleBar = () => {
  return (
    <div className="titlebar-wrapper-spt mt-3 d-flex align-items-center">
      <div className="currency-wrapper-spt">
        <select>
          <option value="inr">Currency INR</option>
          <option value="inr">Currency USD</option>
          <option value="inr">Currency EUR</option>
          <option value="inr">Currency YAN</option>
        </select>
      </div>
      <div className="auth-wrapper-spt d-flex">
        <div className="signreg-wrapper-sp d-flex justify-content-center align-items-center">
          <div className="login-spt">Sign In</div>
          <div className="register-spt">Sign Up</div>
        </div>
        <div className="userinfo-wrapper-sp d-flex justify-content-between align-items-center">
          <div className="message-spt">
            <div
              style={{
                width: 24,
                height: 24,
                color: "white"
              }}
            >
              <Icon size={"100%"} icon={ic_message} />
            </div>
            <div className="circle-mess-spt d-flex justify-content-between align-items-center">
              <p style={{ fontSize: 10 }}>2</p>
            </div>
          </div>
          <div className="user-spt d-flex justify-content-between align-items-center">
            <div className="circle-user" />
            <p>GUEST</p>
            <div
              style={{
                width: 25,
                height: 25,
                marginLeft: -10,
                color: "white"
              }}
            >
              <Icon size={"100%"} icon={ic_arrow_drop_down} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TitleBar;
