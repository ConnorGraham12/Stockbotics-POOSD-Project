import React from "react";
import "./StockEntry.css";
import StockEntry from "./StockEntry.js";
// This should contain a chart comprised of stock entries
// I think we should make the api call here and manage
// state in this component
const Portfolio = () => {
  return (
    <div>
      This is a portfolio. I gotta figure out how to add and remove stonks.
      <ul>
        <li>
          <StockEntry />
        </li>
        <li>
          <StockEntry />
        </li>
        <li>
          <StockEntry />
        </li>
      </ul>
    </div>
  );
};

export default Portfolio;
