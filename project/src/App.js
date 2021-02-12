import logo from './logo.svg';
import './App.css';

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

import {useAuthState} from 'react-firebase-hooks/auth';
import {useCollectionData} from 'react-firebase-hooks/firestore';


firebase.initializeApp({
    // Config here
});

const auth = firebase.auth();
const firestore = firebase.firestore();

function App() {

    const [user] = useAuthState(auth);

    return (
        <div className="App">
            <header className="App-header">

            </header>

            <section>
                // If the user exists they have logged in
                {user ? <LandingPage /> : <SignIn />}
            </section>

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
    return (
        <header>Hello</header>
    )
}

export default App;
