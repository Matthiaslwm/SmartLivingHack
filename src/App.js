import * as firebase from 'firebase';
import './index.js';
import './App.css';

(function() {

    //initialize Firebase
    const config = {
      apiKey: "AIzaSyBVmoMj8_Wv50F47eyvFIoh3Z5Wle_UhEw",
      authDomain: "smartliving-7687e.firebaseapp.com",
      databaseURL: "https://smartliving-7687e.firebaseio.com",
      projectId: "smartliving-7687e",
      storageBucket: "smartliving-7687e.appspot.com",
      messagingSenderId: "240218327083"
    };

    firebase.initializeApp(config);

    //Get Elements

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');
    const btnSignUp = document.getElementById('btnSignUp');
    const btnLogout = document.getElementById('btnLogout');

    //Login Event

    btnLogin.addEventListener('click', e => {

      //Input email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      //Sign in
      const promise = auth.signInWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));

    });

    btnSignUp.addEventListener('click', e => {

      //Input email and pass
      const email = txtEmail.value;
      const pass = txtPassword.value;
      const auth = firebase.auth();

      //Sign in
      const promise = auth.createUserWithEmailAndPassword(email,pass);
      promise.catch(e => console.log(e.message));

    });

    btnLogout.addEventListener('click', e => {
      firebase.auth().signOut();

    })

    //Realtime Listener
    firebase.auth().onAuthStateChanged(firebaseUser => {
      if(firebaseUser)  {
        console.log(firebaseUser);
        btnLogout.classList.remove('hide');
      } else {
        console.log('not logged in');
        btnLogout.classList.add('hide');
      }
    })


}());