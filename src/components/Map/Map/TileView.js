import React, { Component } from 'react'
import classes from './TileView.module.scss'
import ClassNames from 'classnames'

class TileView extends Component {

  render () {
    const { tile } = this.props
    const additionalClasses = []

    if (tile) {
      const borderKeys = Object.keys(tile.borders)
      for (const key of borderKeys) {
        if (tile.borders[key]) {
          additionalClasses.push(classes[`border${key}`])
        }
      }

      if (tile.start) {
        additionalClasses.push(classes['blue'])
      }

      if (tile.stop) {
        additionalClasses.push(classes['red'])
      }
    }
    return (
      <div className={ClassNames(classes.Tile, ...additionalClasses)} />
    )
  }
}

export default TileView