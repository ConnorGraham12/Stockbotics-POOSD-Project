import React from 'react';
import './LoginButton.css'

import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

function LoginButton() {
    const auth = firebase.auth();
    const [user] = useAuthState(auth);

    function SignIn() {
        const signInWithGoogle = () => {
            const provider = new firebase.auth.GoogleAuthProvider();
            auth.signInWithPopup(provider);
        }
        return (
            <button className="login-button" onClick={signInWithGoogle}>Log In</button>
        )
    }

    function SignOut() {
        return auth.currentUser && (
            <button className="login-button" onClick={() => auth.signOut()}>Log Out</button>
        )
    }

    return (
        <>
            {user ? <SignOut /> : <SignIn />}
        </>
    );
}

export default LoginButton;