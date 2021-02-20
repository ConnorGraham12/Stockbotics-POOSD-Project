import React from 'react';
import './Error404.css';

const Error404 = () => {
	return (
		<div className='Error'>
			<h2>This is Embarassing! Page not found.</h2>
			<h1>404</h1>
			<p> We can't find the page you're looking for.</p>
			<a href='/'> Go back home</a>
		</div>

	);
};

export default Error404;
