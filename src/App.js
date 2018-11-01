import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { Switch, Route, withRouter } from 'react-router-dom';
import { fromEvent } from 'rxjs';
import { throttleTime, map, pairwise, distinctUntilChanged, share, filter } from 'rxjs/operators';

import About from './components/About';
import Contact from './components/Contact';
import Home from './components/Home';
import Portfolio from './components/Portfolio';

import './App.css';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isVisible: true,
    };
    
    const scroll$ = fromEvent(window, 'scroll').pipe(
      throttleTime(10),
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]) => (y2 < y1 ? 'Up' : 'Down')),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === 'Up')
    );
    
    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === 'Down')
    );

    scrollUp$.subscribe(() => {
      this.setState({
        isVisible: true,
      });
    });
    
    scrollDown$.subscribe(() => {
      this.setState({
        isVisible: false,
      });
    });
  }

  render() {
    return (
      <div className="App">
        <div className={this.state.isVisible ? 'App-header' : 'hidden'}>
          <NavLink className="App-logo" exact activeClassName="active-logo" to="/"></NavLink>

          <div className="App-menu">
            <NavLink activeClassName="active-link" to="/aboutme">About me</NavLink>
            <NavLink activeClassName="active-link" to="/portfolio">Portfolio</NavLink>
            <NavLink activeClassName="active-link" to="/contact">Contact</NavLink>
          </div>
        </div>

        <div className="App-content">
          <Switch>
            <Route exact path='/' component={Home} />
            <Route path='/aboutme' component={About} />
            <Route path='/portfolio' component={Portfolio} />
            <Route path='/contact' component={Contact} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default withRouter(App);
