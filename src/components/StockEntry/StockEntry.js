import React, { useEffect, useState } from 'react';
import DisplayBox from '../misc/DisplayBox.js';
import getStockInfo from '../../services/backend';
import './StockEntry.css';

// a stock entry is a single row in the porfolio
// it displays many different numbers
// each stock entry should have many display boxes
// trying to decide if the stock entry should be dummy
// component or not
const StockEntry = (props) => {
	const [stockInfo, setStockInfo] = useState({ price: [] });
	const [isBusy, setIsBusy] = useState(true);

	useEffect(async () => {
		let info = await getStockInfo(props.symbol);
		setStockInfo({ price: info.price });
		console.log('EXPECTED: ' + stockInfo.price.regularMarketPrice * props.shares);
		props.sendValue(stockInfo.price.regularMarketPrice * props.shares);
		setIsBusy(false);
	}, []);

	return isBusy ? (
		<div></div>
	) : (
		<div className='row'>
			<div className='company'>
				<h4>{stockInfo.price.shortName + ' '}</h4>
			</div>

			<div className='info'>
				{/* <DisplayBox info={'Symbol: ' + props.symbol} /> */}
				<DisplayBox info={'Shares: ' + props.shares} />
				<DisplayBox info={'Total: $' + stockInfo.price.regularMarketPrice * props.shares} />
				{/* <DisplayBox info={props.oneDayReturn} /> */}
				{/* <DisplayBox info={props.overallReturn} /> */}
				{/* <DisplayBox info={props.returnWithSells} /> */}
				<DisplayBox info={'Price/Share: $' + stockInfo.price.regularMarketPrice} />
			</div>

			<button className='trash' onClick={props.remove}>
				<i class='fa fa-trash' aria-hidden='true'></i>
			</button>
		</div>
	);
};

export default StockEntry;
