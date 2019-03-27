import React from "react";
import { useStore } from "easy-peasy";
import Spinner from "../../../../../test/Spinner";

const SearchResult = () => {
  const loading = useStore(state => state.ui.loading);
  console.log(loading);
  return loading ? (
    <Spinner />
  ) : (
    <div>
      <h1>Search Result</h1>
    </div>
  );
};

export default SearchResult;
