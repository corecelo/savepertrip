import React from "react";
import "./headerrightstyle.css";

const HeaderRight = () => {
  return (
    <div className="headerright-wrapper-spt d-xl-flex flex-column justify-content-start align-items-center pt-3 d-none">
      <div className="slider-header-wrapper-spt" />
      <div className="text-header-ad-wrapper mt-2 align-self-start pl-3">
        <h6>Save with our Deals</h6>
        <div className="divider-header-right-spt" />
        <p className="mt-2 offer-text-spt">Internationals Flight's Offer</p>
        <p className="offer-sub-text-spt">
          Grab up to Rs.15,000 Instant Cashback on International Flights. Use
          Coupon FESTIVE.
        </p>
      </div>
    </div>
  );
};

export default HeaderRight;
