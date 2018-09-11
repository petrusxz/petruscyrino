import React, { Component } from 'react';
import logo from './assets/img/logo-ember.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>

        <div className="Main-welcome">
          <div>Petrus Cyrino</div>
        </div>

        <div className="App-menu">
          <label>About Me</label>
          <label>Portfolio</label>
          <label>Blog</label>
          <label>Contact</label>
        </div>
      </div>
    );
  }
}

export default App;
