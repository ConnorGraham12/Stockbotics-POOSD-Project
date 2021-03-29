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
	return !props.info ? (
		<div>NO INFO</div>
	) : (
		<div className='row'>
			<div className='company'>
				<h4>{props.info.shortName + ' '}</h4>
			</div>

			<div className='info'>
				{/* <DisplayBox info={'Symbol: ' + props.symbol} /> */}
				<DisplayBox info={'Shares: ' + props.shares} />
				<DisplayBox info={'Total: $' + props.info.regularMarketPrice * props.shares} />
				{/* <DisplayBox info={props.oneDayReturn} /> */}
				{/* <DisplayBox info={props.overallReturn} /> */}
				{/* <DisplayBox info={props.returnWithSells} /> */}
				<DisplayBox info={'Price/Share: $' + props.info.regularMarketPrice} />
			</div>

			<button className='trash' onClick={props.remove}>
				<i className='fa fa-trash' aria-hidden='true'></i>
			</button>
		</div>
	);
};

export default StockEntry;
