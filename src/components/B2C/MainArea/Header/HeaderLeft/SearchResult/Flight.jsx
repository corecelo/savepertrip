import React from "react";

const Flight = props => {
  const segment = props.flight.Segments[0];
  return (
    <div>
      <h6>{segment[0].Airline.AirlineName}</h6>
    </div>
  );
};

export default Flight;
