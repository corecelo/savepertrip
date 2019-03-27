import React from "react";
import { Route } from "react-router-dom";
import "./headerrightstyle.css";
import Advertisement from "./Advertisement";
import FlightFilter from "./FlightFilter";

const HeaderRight = () => {
  return (
    <div className="headerright-wrapper-spt d-xl-flex flex-column justify-content-start align-items-center pt-3 d-none">
      <Route path="/search" component={FlightFilter} />
      <Route exact path="/" component={Advertisement} />
    </div>
  );
};

export default HeaderRight;
