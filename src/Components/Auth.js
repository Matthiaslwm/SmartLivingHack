import React, { Component } from 'react';
import * as firebase from 'firebase';
import TextField from '@material-ui/core/TextField';
import { AppBar } from '@material-ui/core';
import Button from '@material-ui/core/Button';

class Auth extends Component {

  constructor() {
    super();

    const txtEmail = document.getElementById('txtEmail');
    const txtPassword = document.getElementById('txtPassword');
    const btnLogin = document.getElementById('btnLogin');

    // TO-DO SIGN IN (FIREBASE)

    // TO-DO SIGN-UP (FIREBASE)

    // TO-DO SIGN-OUT (FIREBASE)
    
  } //Constructor

  render() {
    return (
      <div>
        <AppBar
          title = "Login"
          />
        <br/>
          <TextField
            id = "txtEmail"
            type = "email"
            placeholder = "Email"
            onChange = {(event,newValue) => this.setState({txtEmail:newValue})}
            />
          <br/>
          <TextField
            id = "txtPassword"
            type = "password"
            placeholder = "Password"
            onChange = {(event,newValue) => this.setState({txtPassword:newValue})}
            />
          <br/>

          <br/> 

          <Button id= "btnLogin" variant="contained" color="primary" className="btn btn-action">
            Login
          </Button>

      </div>
    );
  }
}

export default Auth;