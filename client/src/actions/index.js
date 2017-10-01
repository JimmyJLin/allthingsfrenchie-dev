import axios from 'axios';
import { FETCH_NEW_ARRIVALS } from './types';
import { FETCH_NEW_FEEDS } from './types';


export const fetchNewArrivals = () => async dispatch => {

  const res = await axios.get('/api/shopify/collection/new_arrivals');

  dispatch({ type: FETCH_NEW_ARRIVALS, payload: res.data });
};

export const fetchNewInstagramFeeds = () => async dispatch => {

  const res = await axios.get('https://api.instagram.com/v1/users/self/media/recent/?access_token=2220345295.aaaced0.d8319c47df1646e19ec4824e53e673d9');

  console.log(res)

  dispatch({ type: FETCH_NEW_FEEDS, payload: res.data });
}
