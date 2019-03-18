import React from "react";
import Loader from "react-loader-spinner";

const spinner = () => {
  return (
    <div>
      <Loader type="Plane" color="#000000" height="100" width="100"  />
    </div>
  );
};

export default spinner;
