import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import firebase from "firebase";


firebase.initializeApp({
  apiKey: "AIzaSyC2vUUDZ4L4qkUEJLVfRZ9Rzx3BA_Vhkt0",
  authDomain: "eternal-portals.firebaseapp.com",
  projectId: "eternal-portals",
  storageBucket: "eternal-portals.appspot.com",
  messagingSenderId: "517907487072",
  appId: "1:517907487072:web:a9e33c27480be539dea605",
  measurementId: "G-N8Y2WMBPKS"
})

ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
