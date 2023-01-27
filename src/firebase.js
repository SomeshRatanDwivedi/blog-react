import firebase from 'firebase/compat/app';
import 'firebase/compat/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyBHpwNVieTTElIOBLRGxmLV7FEjkDs6qjY",
    authDomain: "blogohalic.firebaseapp.com",
    projectId: "blogohalic",
    storageBucket: "blogohalic.appspot.com",
    messagingSenderId: "184440466430",
    appId: "1:184440466430:web:91715689762d5b33d8aeaf"
  };


firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();

export default db;