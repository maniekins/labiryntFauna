import React, { Component } from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content';

class App extends Component {
  /*
    TODOs:

    - routing (Admin Generator to set randomize variables)
    - move generation logic to properly place
  */

  render() {
    return (
      <div className={classes.App}>
        <Header />
        <Content />
      </div>
    );
  }
}

export default App;
