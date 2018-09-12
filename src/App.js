import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, withRouter } from 'react-router-dom';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

import logo from './assets/img/logo-white.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          
          <div className="App-menu">
            <NavLink activeClassName="active-link" to="/aboutme">About Me</NavLink>
            <NavLink activeClassName="active-link" to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName="active-link" to="/contact">Contact</NavLink>
          </div>
        </div>
        
        <div className="Main-welcome">
          <Switch>
              <Route exact path='/' component={Home}/>
              <Route path='/aboutme' component={About}/>
              <Route path='/portfolio' component={Portfolio}/>
              <Route path='/contact' component={Contact}/>
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
