import React from "react";
import DisplayBox from "../misc/DisplayBox.js";
import getStockInfo from "../../services/backend";

// a stock entry is a single row in the porfolio
// it displays many different numbers
// each stock entry should have many display boxes
// trying to decide if the stock entry should be dummy
// component or not

const StockEntry = (props) => {
  return (
    <div className="row">
      <h4>Gotta figure out api calls</h4>
      <DisplayBox info={props.key} />
      <button onClick={props.remove}>click to remove stonk</button>
    </div>
  );
};

export default StockEntry;
