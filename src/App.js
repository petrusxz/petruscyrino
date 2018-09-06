import React, { Component } from 'react';
import logo from './assets/img/logo-black.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        
        <div className="App-about menu">
          <label>About Me</label>
        </div>
        <div className="App-portfolio menu">
          <label>Portfolio</label>
        </div>
        <div className="App-blog menu">
          <label>Blog</label>
        </div>
        <div className="App-contact menu">
          <label>Contact</label>
        </div>
      </div>
    );
  }
}

export default App;
