import { GENEREATE_NEW } from '../actions/actions'

const generate = (state = {}, action) => {
  switch (action.type) {
    case GENEREATE_NEW:
      return {
        x: action.x,
        y: action.y,
        forceRender: action.forceRender
      }
    default:
      state.forceRender = false
      return state
  }
}

export default generate