import React, { Component, useState, useEffect } from "react";
import "./StockEntry.css";
import StockEntry from "./StockEntry.js";
import { getAssets, removeAsset, addAsset } from "../../services/firebase";
import firebase from "../../services/firebase";
import getStockInfo from "../../services/backend";
//import getStockInfo from "../../services/backend";
// This should contain a chart comprised of stock entries
// I think we should make the api call here and manage
// state in this component

function StockList() {
  // this is the state of the StockList
  const [stocks, setStocks] = useState([]);
  const [searchSymbol, setSearchSymbol] = useState("");
  const [addedShares, setAddedShares] = useState(0);

  useEffect(() => {
    firebase.auth().onAuthStateChanged(() => {
      getAssets().then((assets) => {
        setStocks(assets);
      });
    });
  }, []);

  // remove stocks from portfolio
  const removeStockHandler = async (event, stockID) => {
    // create a copy of the current stock array in state (don't mutate the state)
    const stateStocksCopy = [...stocks];

    // get the index of the stock we want to delete
    const indexOfTarget = stateStocksCopy.findIndex((curStock) => {
      return curStock.stockID == stockID;
    });

    // remove the stock at that index
    stateStocksCopy.splice(indexOfTarget, 1);
    removeAsset(stateStocksCopy);
    setStocks(stateStocksCopy);
  };

  // add stocks to the portfolio
  const addStockHandler = () => {
    let stockCopy = [...stocks];
    stockCopy.push({ symbol: searchSymbol, shares: parseInt(addedShares) });
    addAsset(stocks, searchSymbol, addedShares);
    setStocks(stockCopy);
  };
  // array of JSX objects (one for each stock)
  let allStocks = null;
  const showStocks = () => {
    return !stocks ? (
      <div>You don't have any stocks... maybe you should add one...</div>
    ) : (
      <div>
        {stocks.map((curStock) => {
          return (
            <StockEntry
              key={curStock.symbol}
              symbol={"AMZN"}
              remove={removeStockHandler}
            />
          );
        })}
      </div>
    );
  };

  return (
    <div>
      <button onClick={addStockHandler}>add stock</button>
      <input
        type="text"
        placeholder="stock symbol"
        onInput={(e) => setSearchSymbol(e.target.value)}
      ></input>

      <input
        type="number"
        placeholder="number of shares"
        onInput={(e) => setAddedShares(e.target.value)}
      ></input>
      {/* This is a StockList. We might have one list for the portfolio, and another for a watchlist. */}
      {showStocks()}
      <StockEntry
        key={"AMZN"}
        symbol={"AMZN"}
        remove={removeStockHandler}
      ></StockEntry>
    </div>
  );
}

export default StockList;
