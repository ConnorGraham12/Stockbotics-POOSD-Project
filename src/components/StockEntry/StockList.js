import React, { Component } from "react";
import "./StockEntry.css";
import StockEntry from "./StockEntry.js";
import { getAssets } from "../../services/firebase";
import getStockInfo from "../../services/backend";
// This should contain a chart comprised of stock entries
// I think we should make the api call here and manage
// state in this component

class StockList extends Component {
  // this is the state of the StockList
  state = { stocks: [] };

  componentWillMount() {
    const updateState = async () => {
      // getAssets returns an array of objects
      let assets = await getAssets();

      // create a local copy of the current state stock list
      let stateCopy = [...this.state.stocks];

      // we run into issues if there are no stocks for the user
      if (assets == null || assets.length == 0) {
        stateCopy = [];
        stateCopy[0] = {
          symbol: "hardcoded placeholder",
        };
      } else {
        stateCopy = assets;
      }

      this.setState({
        stocks: stateCopy,
      });
    };

    updateState();
  }

  // remove stocks from portfolio
  removeStockHandler = async (event, stockID) => {
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
    const showStocks = (
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
        {showStocks}
      </div>
    );
  }
}

export default StockList;
