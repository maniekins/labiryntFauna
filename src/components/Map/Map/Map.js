import React, { Component } from 'react'
import { connect } from 'react-redux'
import classes from './Map.module.scss'
import TileView from './TileView';
import Tile from '../../../model/Tile/Tile';

class Map extends Component {
  render () {
    const { maps } = this.props
    return (
      <div className={classes.Map}>
        MAP {maps ? `x:${maps[0].length} y ${maps.length}` : null}
        <div>
          {maps ? maps.map((row, id) => (
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

let toggleRender = false
const mapStateToProps = state => {
  if (state.generate.forceRender) {
    toggleRender = !toggleRender
    state.generate.toggleRender = toggleRender
  }

  if (state.generate) {
    return generateMap(state.generate)
  }
  return state.generate
}

// TODO: Need to moved
const generateMap = generate => {
  const { x, y } = generate
  if (!x || !y) {
    return {}
  }
  const maps = [];
  for (let i = 0; i < x; i++) {
    maps[i] = []
    for (let j = 0; j < y; j++) {
      maps[i].push(new Tile({
        Top: i === 0,
        Left: j === 0,
        Right: j === (y - 1),
        Bottom: i === (x - 1)
      }))
    }
  }

  const max = x * y;
  let start = Math.floor(Math.random() * max)
  let stop = Math.floor(Math.random() * max)

  while (stop === start && max > 1) {
    stop = Math.floor(Math.random() * max)
  }
  let xId = 0
  while (start > (y - 1)) {
    start = start - y
    xId++;
  }
  maps[xId][start].start = true

  xId = 0
  while (stop > (y - 1)) {
    stop = stop - y
    xId++;
  }
  maps[xId][stop].stop = true
  return { maps }
}

export default connect(mapStateToProps)(Map)