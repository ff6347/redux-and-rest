import { INCREMENT_ID } from '../types';
/**
 * This is our simple reducer for the items that come in
 * No need to double check soemthing here
 * Just add all the items to the state
 * follow this function to the lib/root-reducer.js where it is added to the store
 * @param {Number} state
 * @param {Object} action
 */
const id = (state = 0, action) => {
  switch (action.type) {
  case INCREMENT_ID:
    return state + 1;
  default:
    return state;
  }
};
export default id;
