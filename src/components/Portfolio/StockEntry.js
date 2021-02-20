import React from "react";
import DisplayBox from "../misc/DisplayBox.js";

// a stock entry is a single row in the porfolio
// it displays many different numbers
// each stock entry should have many display boxes
const StockEntry = () => {
  return (
    <div>
      <h4>All this info belongs to a particular stock</h4>
      <DisplayBox />
      <DisplayBox />
      <DisplayBox />
      <DisplayBox />
      <DisplayBox />
      <DisplayBox />
    </div>
  );
};

export default StockEntry;
