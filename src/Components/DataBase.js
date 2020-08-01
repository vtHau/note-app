import firebase from "firebase/app";
import "firebase/database"; // If using Firebase database
//import "firebase/storage"; // If using Firebase storage

var firebaseConfig = {
  apiKey: "AIzaSyD2v5JECPCXLVh0qSHkjWzw7zSwaKWUHo4",
  authDomain: "notereact-dc2c2.firebaseapp.com",
  databaseURL: "https://notereact-dc2c2.firebaseio.com",
  projectId: "notereact-dc2c2",
  storageBucket: "notereact-dc2c2.appspot.com",
  messagingSenderId: "630333932068",
  appId: "1:630333932068:web:f2a0e48067ab2369628eb1",
  measurementId: "G-H93S68TTYE",
};

firebase.initializeApp(firebaseConfig);

export const DataNotes = firebase.database().ref("dataForNote");
