import React, { Component } from "react";
import "./StockEntry.css";
import StockEntry from "./StockEntry.js";
// This should contain a chart comprised of stock entries
// I think we should make the api call here and manage
// state in this component
class StockList extends Component {
  render() {
    return (
      <div>
        This is a StockList. We might have one list for the portfolio, and
        another for a watchlist.
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
  }
}

export default StockList;
