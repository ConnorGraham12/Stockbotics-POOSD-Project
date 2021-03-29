import React from 'react';
import './LandingPage.css';

const LandingPage = () => {
	return (
		<div className='Landing'>
			<div className='bg'></div>

			<div className='Landing-header'> TRADE WITHOUT RISK</div>
			<div className='Landing-p'>
				Stockbotics is a simulated trading platform that allows stock trading without risking real money.
				<h1>
					<a href='/about'>About Us</a>
					<div className='divider'></div>
					<a href='https://github.com/ConnorGraham12/POOSD-Project'>GitHub</a>
				</h1>
			</div>
		</div>
	);
};

export default LandingPage;
