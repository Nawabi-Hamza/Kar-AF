// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCe6m8e1iedAedARBxLBFrrN4CrC-ttM9w",
  authDomain: "project-1-e3ddb.firebaseapp.com",
  projectId: "project-1-e3ddb",
  storageBucket: "project-1-e3ddb.appspot.com",
  messagingSenderId: "58120640610",
  appId: "1:58120640610:web:3dd7dcd29e44655749593b",
  measurementId: "G-0DDN1LRM71"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);