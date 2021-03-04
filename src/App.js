
import './App.css';

import React from 'react';
import ReactDOM from 'react-dom';

// Pages
import Contributors from './pages/Contributors/Contributors';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage/LandingPage';
import Error404 from './pages/Error404/Error404';
import Pricing from './pages/Pricing';
import About from './pages/About/About';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// React Router setup
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

function App() {
	return (
		<Router>
			<div className='App'>
				<Navbar />
				<Switch>
					<Route exact path='/'>
						<LandingPage />
					</Route>

					<Route path='/about'>
						<About />
					</Route>

					<Route path='/contributors'>
						<Contributors />
					</Route>

					<Route path='/dashboard'>
						<Dashboard />
					</Route>

					<Route path='/pricing'>
						<Pricing />
					</Route>

					{/* 404 error user tried going to an unkown page */}
					<Route path='*'>
						<Error404 />
					</Route>
				</Switch>
				<Footer />
			</div>
		</Router>
	);
}

export default App;
