export const setAnimals = animals => ({
  type: 'SET_ANIMALS',
  animals
})

export const isLoading = () => ({
  type: 'LOADING_COMPLETE'
})

export const hasErrored = message => ({
  type: 'HAS_ERRORED',
  message
})

export const clearError = () => ({
  type: 'CLEAR_MESSAGE'
})
