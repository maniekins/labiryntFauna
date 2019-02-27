import React, { Component } from 'react'
import classes from './Generator.module.scss'
import Toolbox from '../Toolbox/Toolbox';
import Map from '../Map/Map';

class Generator extends Component {
  render () {
    return (
      <div className={classes.Generator}>
        <Toolbox />
        <Map />
      </div>
    )
  }
}

export default Generator