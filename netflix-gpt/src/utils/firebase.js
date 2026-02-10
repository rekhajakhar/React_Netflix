// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
 import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCsAVjiUv9tijKNR-uxKvdWpC1edB-cjUo",
  authDomain: "netflixgpt-7e4c3.firebaseapp.com",
  projectId: "netflixgpt-7e4c3",
  storageBucket: "netflixgpt-7e4c3.firebasestorage.app",
  messagingSenderId: "806186421801",
  appId: "1:806186421801:web:a98539f7fc74205b671638",
  measurementId: "G-LMEMXX3H96"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();