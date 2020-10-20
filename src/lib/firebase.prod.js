import Firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// import {seedDatabase}  from '../seed'

const config = {
    apiKey: "AIzaSyDp7igG_iIobrgZFgIbXjjKKlRLJG9T8kQ",
    authDomain: "netflix-8193c.firebaseapp.com",
    databaseURL: "https://netflix-8193c.firebaseio.com",
    projectId: "netflix-8193c",
    storageBucket: "netflix-8193c.appspot.com",
    messagingSenderId: "1003216242402",
    appId: "1:1003216242402:web:6321abdacca76cadbc80bb"
};

const firebase = Firebase.initializeApp(config);

// seedDatabase(firebase)

export { firebase };