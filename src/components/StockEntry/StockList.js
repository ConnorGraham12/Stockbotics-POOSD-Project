import React, { Component } from "react";
import "./StockEntry.css";
import StockEntry from "./StockEntry.js";
// This should contain a chart comprised of stock entries
// I think we should make the api call here and manage
// state in this component

class StockList extends Component {
  state = {
    // array of stock objects
    stocks: [
      {
        symbol: "AMZN",
        shares: "2",
        value: "$" + "1896",
        oneDayReturn: "46.30",
        overallReturn: "56.36",
        returnWithSells: "-7.11",
        pricePerShare: "948.14",
      },
    ],
  };

  render() {
    // array of JSX objects (one for each stock)
    let allStocks = null;
    allStocks = (
      <div>
        {this.state.stocks.map((curStock, index) => {
          return (
            <StockEntry
              key={curStock.symbol}
              symbol={curStock.symbol}
              shares={curStock.shares}
              value={curStock.value}
              oneDayReturn={curStock.oneDayReturn}
              overallReturn={curStock.overallReturn}
              returnWithSells={curStock.returnWithSells}
              pricePerShare={curStock.pricePerShare}
              // symbol="symbol"
              // shares="shares"
              // value="value"
              // oneDayReturn="onedayreturn"
              // overallReturn="overallreturn"
              // returnWithSells="returnWithSells"
              // pricePerShare="pricePerShare"
            />
          );
        })}
      </div>
    );

    return (
      <div>
        This is a StockList. We might have one list for the portfolio, and
        another for a watchlist.
        {allStocks}
      </div>
    );
  }
}

export default StockList;
