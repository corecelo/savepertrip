import React from "react";
import { useStore } from "easy-peasy";

const FlightFilter = () => {
  const searchResult = useStore(state => state.search.searchResult);
  let results = [];
  if (searchResult.Response) {
    results = searchResult.Response.Results[0].map(
      result => result.Segments[0][0].Airline.AirlineName
    );
  }

  const UniqueResult = [...new Set(results)];

  const handleChange = e => {
    console.log(e.target);
  };

  return (
    <div>
      {UniqueResult.length > 0 &&
        UniqueResult.map(result => (
          <div>
            <input
              key={result}
              type="checkbox"
              name={result}
              value={result}
              onChange={handleChange}
            />
            {result}
            <br />
          </div>
        ))}
    </div>
  );
};

export default FlightFilter;
