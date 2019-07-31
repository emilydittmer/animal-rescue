import { combineReducers } from 'redux';
import { AnimalsReducer } from './AnimalsReducer';
import { LoadingReducer } from './LoadingReducers';
import { ErrorReducer } from './ErrorReducers';

const rootReducer = combineReducers ({
  animals: AnimalsReducer,
  loading: LoadingReducer,
  error: ErrorReducer
})

export default rootReducer;