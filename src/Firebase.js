// src/firebase.js
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDW89NKaqAYsgzkHXr7TETRC2GHyieDUpo",
  authDomain: "islamicbooks-f9998.firebaseapp.com",
  projectId: "islamicbooks-f9998",
  storageBucket: "islamicbooks-f9998.firebasestorage.app",
  messagingSenderId: "97875191457",
  appId: "1:97875191457:web:3df1012f427a22407ab2e0"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
