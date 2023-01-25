import firebase from 'firebase/app';
import 'firebase/database';
import 'firebase/auth';

let firebaseConfig = {

    apiKey: "AIzaSyBFq0phFJTkxkjmd8hDUsN7uZjYusGuDKM",
    authDomain: "blogapp-46659.firebaseapp.com",
    databaseURL: "https://blogapp-46659-default-rtdb.firebaseio.com",
    projectId: "blogapp-46659",
    storageBucket: "blogapp-46659.appspot.com",
    messagingSenderId: "642406589422",
    appId: "1:642406589422:web:323ed22fda4bbfff5ae4ff",
    measurementId: "G-4PHRC6JRB5"
  
  };
  
  
  // Initialize Firebase
  
  if(!firebase.apps.length){
    firebase.initializeApp(firebaseConfig);
  }

  export default firebase;
  