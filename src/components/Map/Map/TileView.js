import React, { Component } from 'react'
import classes from './TileView.module.scss'

class TileView extends Component {

  render () {
    const { tile} = this.props
    const styles = {}

    if (tile) {
      // TODO: using classes
      const borderStyle = '5px solid black'
      const borderKeys = Object.keys(tile.borders)
      for (const key of borderKeys) {
        if (tile.borders[key]) {
          styles[`border${key}`] = borderStyle
        }
      }

      if (tile.start) {
        styles.backgroundColor = 'blue'
      }

      if (tile.stop) {
        styles.backgroundColor = 'red'
      }
    }
    return (
      <div className={classes.Tile}
      style={styles}></div>
    )
  }
}

export default TileView