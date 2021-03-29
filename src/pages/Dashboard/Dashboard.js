import React, { useEffect, useState } from 'react';
import './Dashboard.css';
import StockList from '../../components/StockEntry/StockList.js';
import DoughnutChart from '../../components/DoughnutChart/DoughnutChart.js';
import { getAssets } from '../../services/firebase';
import firebase from '../../services/firebase';
import getStockInfo from '../../services/backend';

const Dashboard = () => {
	const [stocks, setStocks] = useState([]);
	const [accountValue, setAccountValue] = useState(0);
	const [isLoading, setIsLoading] = useState(true);

	useEffect(async () => {
		if (isLoading)
			firebase.auth().onAuthStateChanged(async (user) => {
				if (user) {
					var assets = await getAssets();
					setStocks(assets);
				}
				setIsLoading(false);
			});
	});

	useEffect(() => {
		if (!isLoading) {
			let accountValue = 0;
			stocks.map((asset) => {
				//console.log(asset.info.regularMarketPrice * asset.shares);
				accountValue += asset.shares * asset.info.regularMarketPrice;
			});
			setAccountValue(accountValue);
		}
	}, [stocks]);

	return (
		<div>
			<div className='DashboardItems'>
				<StockList
					className='Asset-List'
					stocks={stocks}
					setStocks={setStocks}
					setAccountValue={setAccountValue}
				/>

				<div className='Profile-Info'>
					<div className='Data'>
						<h1>Account Value: {accountValue}</h1>
					</div>
					{stocks.length != 0 ? (
						<div className='Chart'>
							<DoughnutChart data={stocks} />
						</div>
					) : (
						<div className='Chart'>Add stocks to see your accounts breakdown!</div>
					)}
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
