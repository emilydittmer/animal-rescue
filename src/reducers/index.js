import { combineReducers } from 'redux';
import { AnimalsReducer } from './AnimalsReducer';
import { LoadingReducer } from './LoadingReducers';
import { ErrorReducer } from './ErrorReducers';
import { DonationsReducer } from './DonationsReducer';

const rootReducer = combineReducers ({
  animals: AnimalsReducer,
  loading: LoadingReducer,
  error: ErrorReducer,
  donations: DonationsReducer
})

export default rootReducer;