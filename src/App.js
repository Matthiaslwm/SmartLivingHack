import React, { Component } from 'react';
import './App.css';
import Auth from './Components/Auth';
import config from './config';


class App extends Component {
  render() {
    return (
      <div className="App">
        Homepage
        <Auth />
      </div>
    );
  }
}

export default App;