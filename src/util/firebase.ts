import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

// firebase init - add your own config here
const firebaseConfig = {
    apiKey: "AIzaSyDJzDPp_8s1JWyQtv-fA0lqxi1KQqOnAQw",
    authDomain: "sync-tab.firebaseapp.com",
    databaseURL: "https://sync-tab.firebaseio.com",
    projectId: "sync-tab",
    storageBucket: "sync-tab.appspot.com",
    messagingSenderId: "153694341305",
    appId: "1:153694341305:web:366384406170c6fe057368",
    measurementId: "G-DDKQ5H7FH8"
};

firebase.initializeApp(firebaseConfig);

// utils
const db = firebase.firestore();
const auth = firebase.auth();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
const githubAuthProvider = new firebase.auth.GithubAuthProvider();

// collection references
// const usersCollection = db.collection("users");

// export utils/refs
export { googleAuthProvider, githubAuthProvider, db, auth };
