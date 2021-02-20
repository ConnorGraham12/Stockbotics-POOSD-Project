import React from "react";
import "./Portfolio.css";
import StockEntry from "./StockEntry.js";
// This should contain a chart comprised of stock entries
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
