import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = require('../config.json');

firebase.initializeApp(config.FIREBASE);

export async function getAssets() {
	const database = firebase.firestore();
	const auth = firebase.auth();
	if (!auth.currentUser) return;
	const user = await database.collection('users').doc(auth.currentUser.uid).get();
	return user.data().assets;
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
