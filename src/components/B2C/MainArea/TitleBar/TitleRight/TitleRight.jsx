import React, { useState } from "react";
import { Icon } from "react-icons-kit";
import { ic_message } from "react-icons-kit/md/ic_message";
import { ic_arrow_drop_down } from "react-icons-kit/md/ic_arrow_drop_down";
import "./titlerightstyle.css";

const TitleRight = () => {
  const [userSetting, setUserSetting] = useState(false);

  const handleUserSetting = () => {
    setUserSetting(!userSetting);
  };

  return (
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
      <div
        className="user-spt d-flex justify-content-between align-items-center"
        onClick={handleUserSetting}
      >
        <div className="circle-user" />
        <p>Guest</p>
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

        {userSetting && (
          <div className="guest-pop-spt">
            <ul className="user-setting-spt">
              <li>Profile</li>
              <li>My Wallet</li>
              <li>Transactions</li>
              <li>Bookings</li>
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default TitleRight;
