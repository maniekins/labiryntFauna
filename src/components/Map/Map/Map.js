import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Map.module.scss'
import TileView from './TileView';

class Map extends Component {
  render () {
    const { labiryntMap } = this.props
    return (
      <div className={classes.Map}>
        MAP {labiryntMap ? `x:${labiryntMap[0].length} y ${labiryntMap.length}` : null}
        <div>
          {labiryntMap ? labiryntMap.map((row, id) => (
            <div key={`row-${id}`} className={classes.TileRow}>
              {row.map((tile, idt) => (
                <TileView key={`tile-${idt}`} tile={tile} />
              ))}
            </div>
          )) : null}
        </div>
      </div>
    )
  }
}

const mapStateToProps = state => {
  if (state.generate) {
    return { labiryntMap: state.generate.labiryntMap }
  }
  return state.generate
}

export default connect(mapStateToProps)(Map)