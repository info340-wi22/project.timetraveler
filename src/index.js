import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import App from './components/App';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiHdW1q_boz8FHQtklpV73qxdBt3SQR58",
  authDomain: "manageable-info340-wi22-13804.firebaseapp.com",
  projectId: "manageable-info340-wi22-13804",
  storageBucket: "manageable-info340-wi22-13804.appspot.com",
  messagingSenderId: "183041562536",
  appId: "1:183041562536:web:41ce43847eb7b14361ef9d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

ReactDOM.render(
  <BrowserRouter>
    <App /> </BrowserRouter>,
  document.getElementById('root')

);


