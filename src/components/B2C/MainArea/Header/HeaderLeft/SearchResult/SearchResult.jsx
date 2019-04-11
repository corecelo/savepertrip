import React from "react";
import { useStore } from "easy-peasy";
import SpinnerMain from "../../../SpinnerMain";
import "./searchResultStyle.css";
import Flight from "./Flight";

// comment

const SearchResult = () => {
  const loading = useStore(state => state.ui.loading);
  const bufferResult = useStore(state => state.search.bufferResult);
  return loading ? (
    <div className="spinner-search-spt">
      <SpinnerMain />
    </div>
  ) : (
    <>
      {bufferResult.Response &&
        bufferResult.Response.Results[0].map(flight => (
          <Flight key={flight.ResultIndex} flight={flight} />
        ))}
    </>
  );
};

export default SearchResult;
