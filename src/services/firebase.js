import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';

const config = require('../config.json');

firebase.initializeApp(config.FIREBASE);

// For development only
firebase.firestore().useEmulator('localhost', 8080);
firebase.auth().useEmulator('http://localhost:9099');

export async function getAssets() {
	const database = firebase.firestore();
	const auth = firebase.auth();

	if (auth.currentUser == null) return;
	const document = await database.collection('users').doc(auth.currentUser.uid).get();
	if (document.exists) return document.data().assets;
	else return [];
}

export async function updateAssets(assets) {
	const database = firebase.firestore();
	const auth = firebase.auth();

	if (!auth.currentUser) return;
	const user = database.collection('users').doc(auth.currentUser.uid);
	return user.update({ assets: assets });
}

export function CreateUser() {
	const database = firebase.firestore();
	const auth = firebase.auth();
	const userCollection = database.collection('users').doc(auth.currentUser.uid);
	userCollection.get().then((docSnapshot) => {
		if (docSnapshot.exists) return;
		userCollection.set({
			Name: auth.currentUser.displayName,
			assets: [],
		});
	});
}

export default firebase;
