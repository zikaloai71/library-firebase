// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


const firebaseConfig = {
  apiKey: "AIzaSyB_ftd7dBQo-WFcPaqri_brrpigszDK-DM",
  authDomain: "fir-library-f51e9.firebaseapp.com",
  projectId: "fir-library-f51e9",
  storageBucket: "fir-library-f51e9.appspot.com",
  messagingSenderId: "848434156658",
  appId: "1:848434156658:web:5153434f54d85aa7571eeb",
  measurementId: "G-5FQ1WD7DCD"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
export default db ;