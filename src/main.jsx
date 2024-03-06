import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBxz-ljwoLbKP9V8G2OvZQToAFHXVhTbFs",
  authDomain: "gato-lunar-nelidabaron.firebaseapp.com",
  projectId: "gato-lunar-nelidabaron",
  storageBucket: "gato-lunar-nelidabaron.appspot.com",
  messagingSenderId: "979442736725",
  appId: "1:979442736725:web:5a4c9374f7b7cd030dfedc",
  measurementId: "G-J3BNG7CFMM"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
