import React, { Component } from "react";
import "./StockEntry.css";
import StockEntry from "./StockEntry.js";
// This should contain a chart comprised of stock entries
// I think we should make the api call here and manage
// state in this component

class StockList extends Component {
  // this is the state of the StockList
  state = {
    // array of stock objects
    // hardcoded a couple examples to test add and remove buttons
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
      {
        symbol: "APPL",
        shares: "100",
        value: "$" + "12100",
        oneDayReturn: "600",
        overallReturn: "1000",
        returnWithSells: "500",
        pricePerShare: "121",
      },
    ],
  };

  // remove stocks from portfolio
  removeStockHandler = (event, stockID) => {
    // create a copy of the current stock array in state (don't mutate the state)
    const stateStocksCopy = [...this.state.stocks];

    // get the index of the stock we want to delete
    const indexOfTarget = stateStocksCopy.findIndex((curStock) => {
      return curStock.stockID == stockID;
    });

    // remove the stock at that index
    stateStocksCopy.splice(indexOfTarget, 1);

    // update the state to reflect the removal
    this.setState({
      stocks: stateStocksCopy,
    });
  };

  // add stocks to the portfolio
  addStockHandler = (event, stockID) => {};
  render() {
    // array of JSX objects (one for each stock)
    let allStocks = null;
    allStocks = (
      <div>
        {this.state.stocks.map((curStock) => {
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
              remove={(event) =>
                this.removeStockHandler(event, curStock.symbol)
              }
            />
          );
        })}
      </div>
    );

    return (
      <div>
        <button>add stock (not working rn)</button>
        <input type="text" value="enter stock symbol"></input>
        This is a StockList. We might have one list for the portfolio, and
        another for a watchlist.
        {allStocks}
      </div>
    );
  }
}

export default StockList;
