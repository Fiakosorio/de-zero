// src/firebase/config.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyDKFVcWZ3q5BsN0TQ9ipFmeBXvydiRq-J4",
  authDomain: "de-zero-d5f41.firebaseapp.com",
  projectId: "de-zero-d5f41",
  storageBucket: "de-zero-d5f41.firebasestorage.app",
  messagingSenderId: "692794658816",
  appId: "1:692794658816:web:a115d7803198d1761f88e5",
  measurementId: "G-3WM91735CT"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
