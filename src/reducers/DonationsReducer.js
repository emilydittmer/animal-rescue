export const DonationsReducer = (state=[], action) => {
  switch(action.type) {
    case 'SET_DONATIONS':
      return action.donations
    case 'ADD_DONATION':
      return [...state, action.donation]
    default:
      return state
  }
}