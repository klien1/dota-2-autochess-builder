import firebase from "firebase/app";
import "firebase/firestore";

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

export const firestore = firebase.firestore();

export default firebase;
