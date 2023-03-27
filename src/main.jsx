import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDfmOtDwn46P6qvKdilQy12PXpZtGs_WwA",
  authDomain: "bolt-reactcoder.firebaseapp.com",
  projectId: "bolt-reactcoder",
  storageBucket: "bolt-reactcoder.appspot.com",
  messagingSenderId: "422390151937",
  appId: "1:422390151937:web:9da9fb1927405fa7b13900"
};

// Initialize Firebase
initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
