import firebase from 'firebase';

const config = {
  apiKey: 'AIzaSyAvb24ubdMIh7qXmKikGC6vsbaBDkzDKd4',
  authDomain: 'nrl-team-selection-app.firebaseapp.com',
  databaseURL: 'https://nrl-team-selection-app.firebaseio.com',
  projectId: 'nrl-team-selection-app',
  storageBucket: '',
  messagingSenderId: '699085181524'
};

firebase.initializeApp(config);

export default firebase;

export const database = firebase.database();
export const auth = firebase.auth();
export const googleAuthProvider = new firebase.auth.GoogleAuthProvider();
export const facebookAuthProvider = new firebase.auth.FacebookAuthProvider();
