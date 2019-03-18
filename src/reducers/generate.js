import { GENEREATE_NEW } from '../actions/actions'
import Tile from '../model/Tile/Tile';

let labiryntMap
const generate = (state = {}, action) => {
  switch (action.type) {
    case GENEREATE_NEW:
      labiryntMap = generateMap(action)
      return {
        x: action.x,
        y: action.y,
        forceRender: action.forceRender,
        labiryntMap: labiryntMap
      }
    default:
      state.forceRender = false
      return state
  }
}

const generateMap = action => {
  const { x, y } = action
  if (!x || !y) {
    return
  }
  const maps = []
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

  const max = x * y
  let start = Math.floor(Math.random() * max)
  let stop = Math.floor(Math.random() * max)

  while (stop === start && max > 1) {
    stop = Math.floor(Math.random() * max)
  }
  let xId = 0
  while (start > (y - 1)) {
    start = start - y
    xId++
  }
  maps[xId][start].start = true

  xId = 0
  while (stop > (y - 1)) {
    stop = stop - y
    xId++
  }
  maps[xId][stop].stop = true
  return maps
}


export default generate