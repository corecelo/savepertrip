import React, { useRef } from "react";
import { Icon } from "react-icons-kit";
import { ic_message } from "react-icons-kit/md/ic_message";
import { ic_arrow_drop_down } from "react-icons-kit/md/ic_arrow_drop_down";
import { useStore } from "easy-peasy";
import { useActions } from "easy-peasy";
import useOnClickOutside from "use-onclickoutside";
import "./titlerightstyle.css";

const TitleRight = () => {
  const userSetting = useStore(state => state.ui.userSetting);
  const notification = useStore(state => state.ui.notification);
  const toggleUserSetting = useActions(actions => actions.ui.toggleUserSetting);
  const toggleUserSettingFalse = useActions(
    actions => actions.ui.toggleUserSettingFalse
  );
  const toggleNotification = useActions(
    actions => actions.ui.toggleNotification
  );
  const toggleNotificationFalse = useActions(
    actions => actions.ui.toggleNotificationFalse
  );

  const ref = useRef(null);
  const ref2 = useRef(null);

  useOnClickOutside(ref2, toggleNotificationFalse);
  useOnClickOutside(ref, toggleUserSettingFalse);

  const handleMsgClick = e => {
    toggleNotification();
  };

  const handleUserSetting = e => {
    toggleUserSetting();
  };

  return (
    <div className="userinfo-wrapper-sp d-flex justify-content-between align-items-center">
      <div className="message-spt" ref={ref2} onClick={handleMsgClick}>
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

        {notification && (
          <div className="notification-spt">
            <ul className="notification-setting-spt">
              <li>Notification 1</li>
              <li>Notification 2</li>
              <li>Notification 3</li>
              <li>Notification 4</li>
            </ul>
          </div>
        )}
      </div>
      <div
        className="user-spt d-flex justify-content-between align-items-center"
        onClick={handleUserSetting}
        ref={ref}
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
