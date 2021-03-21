import React from 'react';
import './Dashboard.css';
import StockList from '../../components/StockEntry/StockList.js';
const Dashboard = () => {
	return (
		<div>
			<div className='DashboardItems'>
				<StockList className='Asset-List' />
				<div className='Profile-Info'>
					<div className='Chart'>A BIG OL CHART BABY</div>
					<div className='Data'>This is where data will go about value, etc.</div>
				</div>
			</div>
		</div>
	);
};

export default Dashboard;
