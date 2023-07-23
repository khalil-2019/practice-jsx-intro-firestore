import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyC857YBQDuaAP3Nnkl2zIq7KTkLB3e4CNk",
  authDomain: "fir-chatgpt-tasks.firebaseapp.com",
  projectId: "fir-chatgpt-tasks",
  storageBucket: "fir-chatgpt-tasks.appspot.com",
  messagingSenderId: "695904390146",
  appId: "1:695904390146:web:02748e4794ae57a28eab1b",
  measurementId: "G-SJPKJLR84S"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
const db = getFirestore(app);

export { db };
