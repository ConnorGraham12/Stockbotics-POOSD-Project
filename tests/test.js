const assert = require('assert');
const firebase = require('@firebase/testing');

const MY_PROJECT_ID = ...;



describe("Stockbotics", () => {

    it("understands basic addition", () =>{
        assert.equal(2+2, 4);
    });

    //read from our read only section of the database
    it("Can read items in the read-only collection", async() => {
        const db = firebase.initializeTestApp({projectID: MY_PROJECT_ID}).firestore();
        const testDoc = db.collection("readonly").doc("testDoc");
        //Asyncronous call
        await firebase.assertSucceeds(testDoc.get());
    })
})