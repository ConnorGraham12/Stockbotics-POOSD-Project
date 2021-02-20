import { render } from '@testing-library/react';
import React from 'react';
import './Searchbar.css';

function Searchbar() {
	return (
		<div className='Searchbar'>
			<input type='text' placeholder={this.props.placeholder} />
		</div>
	);
}

export default Searchbar;
