import React, { Component } from 'react'
import classes from './Toolbox.module.scss'

class Toolbox extends Component {
  constructor (props) {
    super(props)
    this.xRef = React.createRef()
    this.yRef = React.createRef()
  }

  generate = () => {
    console.log('X', this.xRef.current.value)
    console.log('Y', this.yRef.current.value)
  }

  render () {
    return (
      <div className={classes.Toolbox}>
        <div>
          <span>X:</span>
          <input ref={this.xRef} defaultValue={0}/>
        </div>
        <div>
          <span>Y:</span>
          <input ref={this.yRef} defaultValue={0}/>
        </div>
        <div>
          <button onClick={this.generate}>GENERATE</button>
        </div>
      </div>
    )
  }
}

export default Toolbox