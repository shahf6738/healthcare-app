// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: "health-care-saas-4d89c",
  storageBucket: "health-care-saas-4d89c.firebasestorage.app",
  messagingSenderId: "133533692694",
  appId: "1:133533692694:web:bc1b9baafa6d01c0c8d637",
  measurementId: "G-WJP5M0780H",
};

// Initialize Firebase
initializeApp(firebaseConfig);
