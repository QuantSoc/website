// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKOCefGUgySu59v8fpuJlDyrvATA3Br0s",
  authDomain: "quantsoc-website-admin.firebaseapp.com",
  projectId: "quantsoc-website-admin",
  storageBucket: "quantsoc-website-admin.appspot.com",
  messagingSenderId: "510740025113",
  appId: "1:510740025113:web:06ec3b057cecdf721eff88",
  measurementId: "G-6KL4XJX4BM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore();