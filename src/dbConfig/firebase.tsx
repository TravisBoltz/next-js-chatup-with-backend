// Import the functions you need from the SDKs you need
import { getApps,getApp,initializeApp } from "firebase/app";
import { getAuth} from "firebase/auth";
import { getFirestore} from 'firebase/firestore';
import { getAnalytics } from "firebase/analytics";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCmaUbJWOD5XyWpUs1QS-fjz8aA9Qts8MA",
  authDomain: "lhydra-com.firebaseapp.com",
  databaseURL: "https://lhydra-com-default-rtdb.firebaseio.com",
  projectId: "lhydra-com",
  storageBucket: "lhydra-com.appspot.com",
  messagingSenderId: "520983911342",
  appId: "1:520983911342:web:63c49913bea4953e5f463f",
  measurementId: "G-B0L1CZYXZJ"
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const auth= getAuth()
const db = getFirestore(app);
const analytics = getAnalytics(app);
export{ app, auth, db,analytics}