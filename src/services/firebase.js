import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = require('../config.json');

firebase.initializeApp(config.FIREBASE);
firebase.firestore();
firebase.auth();

export default firebase;
