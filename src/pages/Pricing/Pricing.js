import React, { useEffect, useState } from 'react';
import DisplayBox from '../misc/DisplayBox.js';
import getStockInfo from '../../services/backend';
import './StockEntry.css';


const Pricing = (props) => {
	return !props.info ? (
		<div>NO STOCKS CURRENTLY INVESTED IN</div>
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

export default Pricing;
