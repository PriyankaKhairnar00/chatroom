import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
const firebaseConfig = {
  apiKey: "AIzaSyA5Ci9_0nHSAiamx90bgFHMVS90fpz6cvg",
  authDomain: "react-chat-app-31e86.firebaseapp.com",
  databaseURL: "https://react-chat-app-31e86-default-rtdb.firebaseio.com",
  projectId: "react-chat-app-31e86",
  storageBucket: "react-chat-app-31e86.appspot.com",
  messagingSenderId: "719231911072",
  appId: "1:719231911072:web:a801071d74156b93d835c5",
  measurementId: "G-MCYZHTQ7DH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
