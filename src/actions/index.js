export const setAnimals = animals => ({
  type: 'SET_ANIMALS',
  animals
})

export const loadingComplete = () => ({
  type: 'LOADING_COMPLETE'
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const clearError = () => ({
  type: 'CLEAR_MESSAGE'
})

export const setDonations = donations => ({
  type: 'SET_DONATIONS',
  donations
})

export const addDonation = donation => ({
  type: 'ADD_DONATION',
  donation
})
