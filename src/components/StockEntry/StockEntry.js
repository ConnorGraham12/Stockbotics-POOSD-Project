import React, { Component, useState, useEffect } from "react";
import DisplayBox from "../misc/DisplayBox.js";
import getStockInfo from "../../services/backend";

// a stock entry is a single row in the porfolio
// it displays many different numbers
// each stock entry should have many display boxes
// trying to decide if the stock entry should be dummy
// component or not

const StockEntry = (props) => {
  // state manages information about a particular stock
  const [stockObject, setStockObject] = useState({});

  useEffect(() => {
    getStockInfo(props.symbol).then(
      (stock) => {
        setStockObject(stock);
      },
      () => {
        console.log("problem");
      }
    );
  }, []);

  return (
    <div className="row">
      <h4>Gotta figure out api calls</h4>
      {/* <DisplayBox info={stockObject.price.symbol} /> */}
      <button onClick={props.remove}>click to remove stonk</button>
      <button onClick={console.log(stockObject)}>click to display</button>
    </div>
  );
};

export default StockEntry;
