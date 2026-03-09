// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAIvkDW6uzmh6a3ODFO9cmwozKAj5QI0xM",
  authDomain: "shaadibio-d4cdc.firebaseapp.com",
  projectId: "shaadibio-d4cdc",
  storageBucket: "shaadibio-d4cdc.firebasestorage.app",
  messagingSenderId: "695735999040",
  appId: "1:695735999040:web:e5624f5daa0e4b2aa21da5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);