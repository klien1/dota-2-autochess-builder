import firebase from "firebase/app";
import "firebase/firestore";

import _ from "lodash";

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCKu7byrMuaghksjeP11pWSGOrDQdKOxkk",
  authDomain: "dota-2-autochess.firebaseapp.com",
  databaseURL: "https://dota-2-autochess.firebaseio.com",
  projectId: "dota-2-autochess",
  storageBucket: "dota-2-autochess.appspot.com",
  messagingSenderId: "718172420331",
  appId: "1:718172420331:web:b34c46003ba805dc1866ae"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const addData = async (collectionName, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionName);
  //   console.log(objectsToAdd);
  const batch = firestore.batch();

  const newDocRef = collectionRef.doc();
  batch.set(newDocRef, objectsToAdd);

  //   _.forEach(objectsToAdd, (obj, key) => {
  // const newDocRef = collectionRef.doc(key);
  // console.log(obj);
  // console.log(key, obj);
  // batch.set(newDocRef, obj);
  //   });
  //   batch.set(newDocRef, objectsToAdd);
  //   return await batch.commit();
  //   _.forEach(objectsToAdd, obj => {
  // const newDocRef = collectionRef.doc();
  // console.log(obj);
  // batch.set(newDocRef, obj);
  // console.log(newDocRef);
  //   });

  //   return await batch.commit();
  //   console.log(collectionRef);
};

export const firestore = firebase.firestore();

export default firebase;
