export const LoadingReducer = (state=true, action) => {
  switch(action.type) {
    case 'LOADING_COMPLETE':
      return false
    default:
      return state
  }
}