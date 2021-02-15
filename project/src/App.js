import logo from './logo.png';
import './App.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from "@fortawesome/free-brands-svg-icons"

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';

const config = require('./config.json');

firebase.initializeApp(config.FIREBASE);

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {


    return (
        <div className="App">
            {<LandingPage />}
        </div>
    );
}

function SignIn() {
    const signInWithGoogle = () => {
        const provider = new firebase.auth.GoogleAuthProvider();
        auth.signInWithPopup(provider);
    }
    return(
        <button onClick={signInWithGoogle}>Sign In</button>
    )
}

function SignOut() {
    return auth.currentUser && (
        <button onClick={() => auth.signOut()}>Sign Out</button>
    )
}

function LandingPage() {
    const [user] = useAuthState(auth);
    return (
        <div className="Landing">
            {/* PUT NAVBAR HERE PLEASE */}
            <section className="Landing-about">
                <div className="Landing-header">What is StockBotics?</div>
                    <p className="Landing-p">
                        Stockbotics is a mock trading platform that allows the user to test his/her investment acumen without risking any money. It is an educational tool meant especially for new investors, but can also be used by experienced traders. Using real market data, the user can make simulated trades, allowing him/her to learn the market and track the potential growth of his/her mock portfolio with no risk at all.

                        Unlike other trading platforms such as RobinHood or Fidelity, Stockbotics is totally secure because there's no money and no brokerage involved, so there's no need to give us your sensitive banking information. This also means that there's never any consequences for a bad trade. With Stockbotics, the user is free to make mistakes and take risks, building his/her market knowledge so that when he/she is ready to invest for real, he/she invests with confidence.
                    </p>
            </section>
            <section className="Landing-contact">
                <div className="Landing-header">Contact Us</div>
                <a href="https://github.com/ConnorGraham12/POOSD-Project"><FontAwesomeIcon icon={faGithub} /></a>
            </section>
        </div>
    )
}

export default App;
