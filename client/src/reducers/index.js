import { combineReducers } from 'redux';
import newArrivalsReducer from './newArrivalReducer';

export default combineReducers({
  newArrivals: newArrivalsReducer
});
