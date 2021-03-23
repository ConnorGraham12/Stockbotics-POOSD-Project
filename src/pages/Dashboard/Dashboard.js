import React, { useState } from "react";
import "./Dashboard.css";
import StockList from "../../components/StockEntry/StockList.js";
const Dashboard = () => {
  const [accountValue, setAccountValue] = useState(0);

  const updateAccountValue = (value) => {
    setAccountValue(value + accountValue);
  };

  return (
    <div>
      <div className="DashboardItems">
        <StockList
          className="Asset-List"
          updateAccountValue={updateAccountValue}
        />
        <div className="Profile-Info">
          <div className="Chart"></div>
          <div className="Data">
            <p>This is where data will go about value, etc.</p>
            <p>Account Value: {accountValue}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
