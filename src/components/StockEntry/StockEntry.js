import React, { useEffect, useState } from 'react';
import DisplayBox from '../misc/DisplayBox.js';
import getStockInfo from '../../services/backend';

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
		console.log(info);
		setIsBusy(false);
	}, []);

	return isBusy ? (
		<div></div>
	) : (
		<div className='row'>
			<h4>{stockInfo.price.shortName + ' '}</h4>
			<DisplayBox info={'Symbol: ' + props.symbol} />
			<DisplayBox info={'Shares: ' + props.shares} />
			<DisplayBox info={'Total: $' + stockInfo.price.regularMarketPrice * props.shares} />
			<DisplayBox info={props.oneDayReturn} />
			<DisplayBox info={props.overallReturn} />
			<DisplayBox info={props.returnWithSells} />
			<DisplayBox info={'Price/Share: $' + stockInfo.price.regularMarketPrice} />
			<button onClick={props.remove}>click to remove stonk</button>
		</div>
	);
};

export default StockEntry;
