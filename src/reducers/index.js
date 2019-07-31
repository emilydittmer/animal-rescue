import { combineReducers } from 'redux';
import { AnimalsReducer } from './AnimalsReducer'

const rootReducer = combineReducers ({
  animals: AnimalsReducer
})

export default rootReducer;