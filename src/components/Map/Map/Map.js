import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Map.module.scss'
import TileView from './TileView';

class Map extends Component {
  setMapRef = (node) => {
    this.mapRef = node;
  }

  handleClick = (e) => {
    if (this.mapRef && !this.mapRef.contains(e.target)) {
      console.log('click outside', e)
    } else {
      console.log('setFocus', e)
    }
  }

  handleKeydown = e => {
    switch (e.keyCode) {
      case 37:
        console.log('left')
        break
      case 38:
        console.log('top')
        break
      case 39:
        console.log('right')
        break
      case 40:
        console.log('down')
        break
      default:
        break
    }
  }

  componentDidMount () {
    this.mapRef.addEventListener('keydown', this.handleKeydown)
    document.addEventListener('click', this.handleClick)
  }

  componentWillUnmount() {
    this.mapRef.removeEventListener('keydown', this.handleKeydown)
    document.removeEventListener('click', this.handleClick);
  }

  renderRow = (row, id) => {
    const key = `row-${id}`
    return (
      <div key={key}
        className={classes.TileRow}
      >
        {row.map(this.renderTitleView)}
      </div>
    )
  }

  renderTitleView = (tile, idt) => {
    const key = `tile-${idt}`
    return (
      <TileView key={key} tile={tile} />
    )
  }

  render () {
    const { labiryntMap } = this.props
    return (
      <div className={classes.Map}
        ref={this.setMapRef}
        tabIndex={0}>
        MAP {labiryntMap ? `x:${labiryntMap[0].length} y ${labiryntMap.length}` : null}
        <div>
          {labiryntMap ? labiryntMap.map(this.renderRow) : null}
        </div>
      </div>
    )
  }
}

// TODO: need to add selectors
const mapStateToProps = state => {
  if (state.generate) {
    return { labiryntMap: state.generate.labiryntMap }
  }
  return state.generate
}

export default connect(mapStateToProps)(Map)