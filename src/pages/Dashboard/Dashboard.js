import React, { useState } from 'react';
import './Dashboard.css';
import StockList from '../../components/StockEntry/StockList.js';
const Dashboard = () => {
	const [accountValue, setAccountValue] = useState(0);

	const updateAccountValue = (value) => {
		// console.log('ACCOUNT VALUE: ' + accountValue);
		setAccountValue(value + accountValue);
	};

	return (
		<div>
			<div className='DashboardItems'>
				<StockList className='Asset-List' setAccountValue={setAccountValue} />
				<div className='Profile-Info'>
					<div className='Chart'>A BIG OL CHART BABY</div>
					<div className='Data'>
						<p>This is where data will go about value, etc.</p>
						<p>Account Value: {accountValue}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
