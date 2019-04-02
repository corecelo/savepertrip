import React from "react";
import ad from "./ad.jpg";

const Advertisement = () => {
  return (
    <>
      <div className="slider-header-wrapper-spt">
        <img src={ad} alt="ad" className="img-ad-spt" />
      </div>
      <div className="text-header-ad-wrapper mt-2 align-self-start pl-3">
        <p className="mt-2 offer-text-spt">Internationals Flight's Offer</p>
        <p className="offer-sub-text-spt">
          Grab up to Rs.15,000 Instant Cashback on International Flights. Use
          Coupon FESTIVE.
        </p>
      </div>
    </>
  );
};

export default Advertisement;
