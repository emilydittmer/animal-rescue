export const AnimalsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_ANIMALS':
      return action.animals
    default:
      return state
  }
}