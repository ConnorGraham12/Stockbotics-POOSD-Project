import React from 'react';
import { Link } from 'react-router-dom';
import LoginButton from '../LoginButton/LoginButton';
import { MenuItems } from './MenuItems';
import './Navbar.css';

function Navbar(props) {
	return (
		<nav className='NavbarItems'>
			<h1 className='navbar-logo'>
				<a href='/'>
					Stockbotics <i className='fas fa-coins'></i>
				</a>
			</h1>
			<div className='menu-icon'></div>
			<ul className='nav-menu'>
				{MenuItems.map((item, index) => {
					return (
						<li key={index}>
							<Link className={item.cName} to={item.url}>
								{item.title}
							</Link>
						</li>
					);
				})}
			</ul>
			<LoginButton />
		</nav>
	);
}

export default Navbar;
