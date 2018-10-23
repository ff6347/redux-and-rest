import {GET_ALL_ITEMS_DATA_ERROR, POST_NEW_ITEM_DATA_ERROR} from '../types';
/**
 * Here we add all errors the the state
 * follow this function to the lib/root-reducer.js where it is added to the store
 * @param {Array} state
 * @param {Object} action
 */
const errors = (state = [], action)=>{
  switch (action.type) {
  case GET_ALL_ITEMS_DATA_ERROR:
  case POST_NEW_ITEM_DATA_ERROR:
    return [action.error, ...state];
  default:
    return state;
  }
};
export default errors;
