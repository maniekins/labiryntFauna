const something = (state = {}, action) => {
  switch (action.type) {
    case 'some':
      return {
        str: `some str: ${action.str}`
      }
    default:
      return state
  }
}

export default something