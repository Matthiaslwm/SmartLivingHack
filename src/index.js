import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyBVmoMj8_Wv50F47eyvFIoh3Z5Wle_UhEw",
    authDomain: "smartliving-7687e.firebaseapp.com",
    databaseURL: "https://smartliving-7687e.firebaseio.com",
    projectId: "smartliving-7687e",
    storageBucket: "smartliving-7687e.appspot.com",
    messagingSenderId: "240218327083"
  };

  firebase.initializeApp(config);

ReactDOM.render(
    <App />,
    document.getElementById('root')
);


