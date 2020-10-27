import firebase from "firebase";
require("firebase/auth");

const config = {
  apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
  authDomain: "portfolio-oddaj.firebaseapp.com",
  databaseURL: "https://portfolio-oddaj.firebaseio.com",
  projectId: "portfolio-oddaj",
  storageBucket: "portfolio-oddaj.appspot.com",
  messagingSenderId: "288979098170",
  appId: "1:288979098170:web:86c1c639dc72f096fef303",
  measurementId: "G-2SE488KVTL",
};
const db = firebase.initializeApp(config);
export default db;
 