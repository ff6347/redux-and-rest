import { GET_ALL_ITEMS_DATA,
  GET_ALL_ITEMS_DATA_RECEIVED,
  GET_ALL_ITEMS_DATA_ERROR,
  POST_NEW_ITEM_DATA_RECEIVED,
  POST_NEW_ITEM_DATA,
  POST_NEW_ITEM_DATA_ERROR} from '../types';
/**
 * This is the loading state. It might be very short to actually see
 * But if the request takes soem more time you could do something while we are loading
 * @param {Boolean} state 
 * @param {Object} action 
 */
const loading = (state = false, action) => {
  switch (action.type) {
  case GET_ALL_ITEMS_DATA:
  case POST_NEW_ITEM_DATA:
    return true;
  case POST_NEW_ITEM_DATA_RECEIVED:
  case GET_ALL_ITEMS_DATA_RECEIVED:
    return false;
  case POST_NEW_ITEM_DATA_ERROR:
  case GET_ALL_ITEMS_DATA_ERROR:
    return false;
  default:
    return state;
  }
};
export default loading;
