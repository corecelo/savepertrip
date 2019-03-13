import React from "react";
import { Icon } from "react-icons-kit";
import {
  plane,
  hotel,
  bus,
  creditCard,
  train,
  sunO,
  heartbeat,
  handORight
} from "react-icons-kit/fa";
import { NavLink } from "react-router-dom";

// CSS Import
import "./navbarItemstyle.css";
import { heart } from "react-icons-kit/fa";

const NavbarItem = () => {
  return (
    <div className="navitems-spt d-flex flex-column align-items-start justify-content-between">
      <NavLink
        to="/"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={plane} />
        </div>
        Flights
      </NavLink>
      <NavLink
        to="/hotel"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={hotel} />
        </div>
        Hotels
      </NavLink>
      <NavLink
        to="/bus"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={bus} />
        </div>
        Bus
      </NavLink>
      <NavLink
        to="/visa"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={creditCard} />
        </div>
        Visa
      </NavLink>
      <NavLink
        to="/irctc"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={train} />
        </div>
        IRCTC
      </NavLink>
      <NavLink
        to="/holiday"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={sunO} />
        </div>
        Holidays
      </NavLink>
      <NavLink
        to="/insuarance"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={heart} />
        </div>
        Insuarance
      </NavLink>
      <NavLink
        to="/offline"
        activeClassName="active"
        className="d-flex align-items-center navlink-spt"
      >
        <div
          style={{
            width: 20,
            height: 20,
            color: "black",
            marginRight: 20,
            marginTop: -5
          }}
        >
          <Icon size={"100%"} icon={handORight} />
        </div>
        Offline
      </NavLink>
    </div>
  );
};

export default NavbarItem;
