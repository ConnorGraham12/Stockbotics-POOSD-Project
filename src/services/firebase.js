import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = require('../config.json');

firebase.initializeApp(config.FIREBASE);

// For development only
firebase.firestore().useEmulator('localhost', 8080);
firebase.auth().useEmulator('http://localhost:9099');

export async function getAssets() {
	const database = firebase.firestore();
	const auth = firebase.auth();

	if (!auth.currentUser) return;
	const user = await database.collection('users').doc(auth.currentUser.uid).get();
	return user.data().assets;
}

export async function removeAsset(assets) {
	const database = firebase.firestore();
	const auth = firebase.auth();

	if (!auth.currentUser) return;
	const user = database.collection('users').doc(auth.currentUser.uid);
	return user.update({ assets: assets });
}

export function addAsset(assets, symbol, shares) {
	const database = firebase.firestore();
	const auth = firebase.auth();
	const indexOfTarget = assets.findIndex((curStock) => {
		return curStock.symbol == symbol;
	});
	if (indexOfTarget == -1) assets.push({ symbol: symbol, shares: parseInt(shares) });
	else {
		var tempShares = parseInt(assets[indexOfTarget].shares);
		tempShares += parseInt(shares);
		assets[indexOfTarget].shares = parseInt(tempShares);
	}

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
