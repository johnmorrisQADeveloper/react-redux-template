const initialState = {
  isLogged: false
}

export default (state = initialState, action) => {
  switch (action.type) {
    case 'TOGGLE':
      return {
        ...state,
        isLogged: !state.isLogged
      }
    default:
      return state
  }
}
