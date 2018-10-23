// get all the types we defined
import { GET_ALL_ITEMS_DATA, POST_NEW_ITEM_DATA, INCREMENT_ID } from './types';
// and create some actions for them

/**
 * this will dispatch a GET request to call the route
 * localhost:3000/get-all
 * follow this function to lib/middle-ware.js
 */
export const getItems = () =>{
  return {type:GET_ALL_ITEMS_DATA};
};

/**
 * this dispatches a POST request to
 * localhost:3000/add
 *  the string used as body we pass in is hardcoded in the index.js
 * This will be wrapped into a JSON object later on
 * follow this function to lib/middle-ware.js
 *
 * @param {Object} body
 */

export const postItem = (body) =>{
  return {
    type: POST_NEW_ITEM_DATA,
    body: body
  };
};
export const incrementId = () =>{
  return {
    type: INCREMENT_ID
  };
};
