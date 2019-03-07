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

const NavbarItem = () => {
  return (
    <div className="navitems-spt mt-3 d-flex flex-column align-items-start justify-content-between">
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={plane} />
        </div>
        <NavLink to="/" activeClassName="active">
          Flights
        </NavLink>
      </div>
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={hotel} />
        </div>
        <NavLink to="/hotels">Hotels</NavLink>
      </div>
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={bus} />
        </div>
        <NavLink to="/bus">Bus</NavLink>
      </div>
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={creditCard} />
        </div>
        <NavLink to="/visa">Visa</NavLink>
      </div>
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={train} />
        </div>
        <NavLink to="/irctc">IRCTC</NavLink>
      </div>
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={sunO} />
        </div>
        <NavLink to="/holidays">Holidays</NavLink>
      </div>
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={heartbeat} />
        </div>
        <NavLink to="/insurance">Insurance</NavLink>
      </div>
      <div className="d-flex align-items-center navlink-spt">
        <div
          style={{
            width: 20,
            height: 20,
            color: "white"
          }}
        >
          <Icon size={"100%"} icon={handORight} />
        </div>
        <NavLink to="/offline">Offline</NavLink>
      </div>
    </div>
  );
};

export default NavbarItem;
