import firebase from "firebase";
import "firebase/firestore";

var firebaseConfig = {
  apiKey: "AIzaSyAGh8BGW2k-Pj3ip5qMQQ1J8u0J2-sUeg4",
  authDomain: "react-native-firebase-7640d.firebaseapp.com",
  projectId: "react-native-firebase-7640d",
  storageBucket: "react-native-firebase-7640d.appspot.com",
  messagingSenderId: "208940797727",
  appId: "1:208940797727:web:e8e696580e14deb860aa2a",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default {
  firebase,
  db,
};
