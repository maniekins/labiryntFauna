import React, { Component } from 'react';
import classes from './Content.module.scss';
import Generator from '../Map/Generator/Generator';

class Content extends Component {
  render () {
    return (
      <div className={classes.Content}>
        <p>Hello in Map Generator:</p>
        <Generator />
      </div>
    );
  }
}

export default Content;
