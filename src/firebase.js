import firebase from 'firebase';
import { API_KEY, MESSAGING_SENDER_ID } from './secrets.js';

// Initialize Firebase
var config = {
  apiKey: API_KEY,
  authDomain: "uhondo-c0b4a.firebaseapp.com",
  databaseURL: "https://uhondo-c0b4a.firebaseio.com",
  projectId: "uhondo-c0b4a",
  storageBucket: "uhondo-c0b4a.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID
};
firebase.initializeApp(config);

export default firebase;
