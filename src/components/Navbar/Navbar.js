import React, { Component } from 'react';
import { Link } from 'react-router-dom'
import { MenuItems } from './MenuItems'
import './Navbar.css'

class Navbar extends Component {
    render() {
        return (
            <nav className="NavbarItems">
                <h1 className="navbar-logo">Stockbotics <i className="fas fa-coins"></i></h1>
                <div className="menu-icon">
                </div>
                <ul className="nav-menu">
                    {MenuItems.map((item, index) => {
                        return (
                            <li key={index}>
                                <Link className={item.cName} to={item.url}>
                                    {item.title}
                                </Link>
                            </li>
                        )
                    })}
                </ul>
                {this.props.user ? <this.SignOut /> : <this.SignIn />}
            </nav>
        )
    }

    SignIn = () => {
        const signInWithGoogle = () => {
            const provider = new this.props.firebase.auth.GoogleAuthProvider();
            this.props.auth.signInWithPopup(provider);
        }
        return (
            <button className="login-button" onClick={signInWithGoogle}>Log In</button>
        )
    }

    SignOut = () => {
        return this.props.auth.currentUser && (
            <button className="login-button" onClick={() => this.props.auth.signOut()}>Log Out</button>
        )
    }

}

export default Navbar 