// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBzXZFyroZTiK3rj8FfLY4fbKh4qbAu1uU",
  authDomain: "streamflix-e5f0c.firebaseapp.com",
  projectId: "streamflix-e5f0c",
  storageBucket: "streamflix-e5f0c.appspot.com",
  messagingSenderId: "1078613576749",
  appId: "1:1078613576749:web:34bf1c2b39db7f30fcfca4",
  measurementId: "G-SVLJZ68FRM",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();
