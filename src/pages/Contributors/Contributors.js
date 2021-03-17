import React from 'react';
import { render } from 'react-dom';
import './Contributors.css';

const Contributors = () => {
	return (
		/*<div>Contributors</div>*/
		<div className='ContributorItems'>
			<div classname='box1'>
			<h1>CONTRIBUTORS</h1>
			<h2>Who we are</h2>
			<p>
				A group of dedicated college students developing a project to give everyone an opportunity to
				get into investment without the risk of losing.
			</p>
			</div>
		<div classname='Links'>
			<a className='Contributor-Link' href='https://github.com/jrm5399'>
				John Murphy
			</a>
			<br></br>
			<a className='Contributor-Link' href='https://github.com/kirkacarmichael'>
				Kirk Carmichael
			</a>
			<br></br>
			<a className='Contributor-Link' href='https://github.com/ProtoSpoof'>
				Quinn Kildare
			</a>
			<br></br>
			<a className='Contributor-Link' href='https://github.com/ConnorGraham12'>
				Connor Graham
			</a>
			<br></br>
			<a className='Contributor-Link' href='https://github.com/ClaytonPatterson33'>
				Clayton Patterson
			</a>
			</div>
		</div>
	);
};

export default Contributors;
