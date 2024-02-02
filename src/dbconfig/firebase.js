// Import the functions you need from the SDKs you need
import { getApps, getApp, initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getDatabase } from "firebase/database";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAxt9OrXPdpS2kAf0piZ35ESGbvckstQWQ",
  authDomain: "me-and-you-c8882.firebaseapp.com",
  projectId: "me-and-you-c8882",
  storageBucket: "me-and-you-c8882.appspot.com",
  messagingSenderId: "603517917478",
  appId: "1:603517917478:web:3d5e322047ca2697eb49e7",
  measurementId: "G-R24BZ85D05",
};
// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);
const rtdb = getDatabase();

export { app, auth, db, rtdb };
