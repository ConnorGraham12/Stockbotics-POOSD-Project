import React from "react";
import DisplayBox from "../misc/DisplayBox.js";

// a stock entry is a single row in the porfolio
// it displays many different numbers
// each stock entry should have many display boxes
// trying to decide if the stock entry should be dummy
// component or not
const StockEntry = (props) => {
  return (
    <div className="row">
      <h4>Gotta figure out api calls</h4>
      <DisplayBox info={props.symbol} />
      <DisplayBox info={props.shares} />
      <DisplayBox info={props.value} />
      <DisplayBox info={props.oneDayReturn} />
      <DisplayBox info={props.overallReturn} />
      <DisplayBox info={props.returnWithSells} />
      <DisplayBox info={props.pricePerShare} />
    </div>
  );
};

export default StockEntry;
