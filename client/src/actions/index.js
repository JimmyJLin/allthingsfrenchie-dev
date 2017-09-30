import axios from 'axios';
import { FETCH_NEW_ARRIVALS } from './types';


export const fetchNewArrivals = () => async dispatch => {

  const res = await axios.get('/api/shopify/collection/new_arrivals');

  dispatch({ type: FETCH_NEW_ARRIVALS, payload: res.data });
};
