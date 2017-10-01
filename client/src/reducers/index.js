import { combineReducers } from 'redux';
import newArrivalsReducer from './newArrivalReducer';
import instagramReducer from './instagramReducer';

export default combineReducers({
  newArrivals: newArrivalsReducer,
  instagram: instagramReducer
});
