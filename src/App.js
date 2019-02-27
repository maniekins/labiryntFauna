import React, { Component } from 'react';
import classes from './App.module.scss';
import Header from './components/Header/Header'
import Content from './components/Content/Content';

class App extends Component {
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
