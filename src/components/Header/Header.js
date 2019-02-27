import React, { Component } from 'react';
import logo from './logo.svg';
import classes from './Header.module.scss';

class Header extends Component {
  render () {
    return (
      <header className={classes.Header}>
        <img src={logo} className={classes.Logo} alt="logo" />
        <span className={classes.Title}>
          Labirynt Fauna
        </span>
        <a
          className={classes.Link}
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    );
  }
}

export default Header;
