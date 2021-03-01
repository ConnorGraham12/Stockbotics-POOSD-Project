import React from 'react';
import StockList from '../../components/StockEntry/StockList.js';
import getStockInfo from '../../services/backend';
const Dashboard = () => {
	return (
		<div>
			<h1>DashBoard</h1>
			<StockList />
		</div>
	);
};

export default Dashboard;
