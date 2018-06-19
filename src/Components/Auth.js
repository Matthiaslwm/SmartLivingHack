import React, { Component } from 'react';
import * as firebase from 'firebase';

class Auth extends Component {

  constructor() {
    super();

    this.state = {
      speed: 10
    };

  }

  componentDidMount() {
    const rootRef = firebase.database().ref();
    const speedRef = rootRef.child('speed');
    
    speedRef.on('value', snap => {
      this.setState({
        speed: snap.val()
      });

    });

  }

  render() {
    return (
      <div className = 'Auth'>
        <h1>{this.state.speed}</h1>
      </div>
    );
  }
}

export default Auth;