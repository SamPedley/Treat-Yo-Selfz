import firebase from 'firebase';
var config = { /* COPY THE ACTUAL CONFIG FROM FIREBASE CONSOLE */
  apiKey: "AIzaSyD6pp_3A8EKC4QG8-mnFrfwT7jMOenyfyI",
  authDomain: "treat-yo-selfz.firebaseapp.com",
  databaseURL: "https://treat-yo-selfz.firebaseio.com",
};
var fire = firebase.initializeApp(config);
export default fire;