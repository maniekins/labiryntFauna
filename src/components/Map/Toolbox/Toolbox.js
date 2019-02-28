import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Toolbox.module.scss'
import { generateNew, doSomething } from '../../../actions/actions'

class Toolbox extends Component {
  constructor (props) {
    super(props)
    this.xRef = React.createRef()
    this.yRef = React.createRef()
  }

  generate = evt => {
    evt.preventDefault();
    this.props.generateNew(+this.xRef.current.value, +this.yRef.current.value)
  }

  render () {
    const {x, y} = this.props
    return (
      <>
      <form className={classes.Toolbox} onSubmit={this.generate}>
        <div>
          <span>X:</span>
          <input ref={this.xRef} defaultValue={x} />
        </div>
        <div>
          <span>Y:</span>
          <input ref={this.yRef} defaultValue={y} />
        </div>
        <div>
          <input type="submit" value="GENERATE"/>
        </div>
      </form>
      <button onClick={() => {
        this.props.doSomething()
      }}>Something</button>
      </>
    )
  }
}

const mapStateToProps = state => {
  console.log('state', state)
  if (state.something) {
    console.log('Something state:', state.something.str)
  }
  if (state.generate) {
    return {x: state.generate.x, y: state.generate.y}
  }

  return {}
}

const mapDispatchToProps = dispatch => ({
  generateNew: (x, y) => dispatch(generateNew(x, y)),
  doSomething: () => dispatch(doSomething())
})

export default connect(mapStateToProps, mapDispatchToProps)(Toolbox)