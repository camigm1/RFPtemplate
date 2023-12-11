// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyDLI1L-RGerlfBl5hDoQ1rcTSS0aNBvXO4",
  authDomain: "template-display.firebaseapp.com",
  projectId: "template-display",
  storageBucket: "template-display.appspot.com",
  messagingSenderId: "21306123563",
  appId: "1:21306123563:web:ec433649c47cca07d2d16e",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getDatabase(app);
