import logo from './logo.png';
import './App.css';

import React from "react";
import ReactDOM from "react-dom";

// Pages
import About from './pages/About';
import Contributors from './pages/Contributors';
import Dashboard from './pages/Dashboard';
import LandingPage from './pages/LandingPage';
import Error404 from './pages/Error404';
import Pricing from './pages/Pricing';

// Components
import Navbar from "./components/Navbar/Navbar";
import Footer from "./components/Footer/Footer";

// React Router setup
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


// Firebase setup
import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import { useAuthState } from 'react-firebase-hooks/auth';
import { useCollectionData } from 'react-firebase-hooks/firestore';

const config = require('./config.json');

firebase.initializeApp(config.FIREBASE);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

    const [user] = useAuthState(auth);

    return (
        <Router>
            <div className="App">
                <Navbar user={user} auth={auth} firebase={firebase} />
                <Switch>
                    <Route exact path="/">
                        <LandingPage />
                    </Route>

                    <Route path="/about">
                        <About />
                    </Route>

                    <Route path="/contributors">
                        <Contributors />
                    </Route>

                    <Route path="/dashboard">
                        <Dashboard />
                    </Route>

                    <Route path="/pricing">
                        <Pricing />
                    </Route>

                    {/* 404 error user tried going to an unkown page */}
                    <Route path="*">
                        <Error404 />
                    </Route>
                </Switch>
                <Footer />
            </div>
        </Router>

    );
}

export default App;
