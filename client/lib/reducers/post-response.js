import { POST_NEW_ITEM_DATA_RECEIVED } from '../types';
/**
 * This is our simple reducer for the post response that come in
 * No need to double check soemthing here
 * Just add all the items to the state
 * follow this function to the lib/root-reducer.js where it is added to the store
 * @param {Array} state
 * @param {Object} action
 */
const postResponse = (state = [], action) => {
  switch (action.type) {
  case POST_NEW_ITEM_DATA_RECEIVED:
    console.log('post response received and updated the state');
    console.log(action);
    return [action.body, ...state];
  default:
    return state;
  }
};
export default postResponse;
