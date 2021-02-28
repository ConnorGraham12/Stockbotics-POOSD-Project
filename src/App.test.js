const assert = require('assert');
const firebase = require('@firebase/testing');
const config = require('./config.json');


const app = firebase.initializeTestApp({
    projectId: config.FIREBASE.projectId,
    auth: { uid: 'alice', email: 'alice@example.com' },
});

describe('Stockbotics', () => {
    it('understands basic addition', () => {
        assert.equal(2 + 2, 4);
    });

    //read from our read only section of the database
    it('Can read items in the read-only collection', async () => {
        const db = app.firestore();
        const testDoc = db.collection('readonly').doc('testDoc');
        //Asyncronous call
        await firebase.assertSucceeds(testDoc.get());
    });

    it('Cant write items in the read-only collection', async () => {
      const db = app.firestore();
      const testDoc = db.collection('readonly').doc('testDoc');
      //Asyncronous call
      await firebase.assertFails(testDoc.set({foo: "cant write"}));
  });
});