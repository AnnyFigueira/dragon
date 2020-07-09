import { combineReducers } from 'redux';
import dragon from './dragon/reducer';

/* I'm doing this assuming I might need to have more reducers in the future */
export default combineReducers({
  dragon,
});