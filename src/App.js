import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './App.module.scss';

class App extends Component {
  render() {
    console.log(classes)
    return (
      <div className={classes.App}>
        <header className={classes['App-header']}>
          <img src={logo} className={classes['App-logo']} alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className={classes.appLink}
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

export default App;
