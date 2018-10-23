import { GET_ALL_ITEMS_DATA_RECEIVED } from '../types';
/**
 * This is our simple reducer for the items that come in
 * No need to double check soemthing here
 * Just add all the items to the state
 * follow this function to the lib/root-reducer.js where it is added to the store
 * @param {Array} state 
 * @param {Object} action 
 */
const items = (state = [], action) => {
  switch (action.type) {
  case GET_ALL_ITEMS_DATA_RECEIVED:
    console.log('data received and updated the state');
    return [...action.body.data];
  default:
    return state;
  }
};
export default items;
