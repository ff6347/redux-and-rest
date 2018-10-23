// This is our middle-ware that does all the magic to call the API
// it gets added to Redux in
// lib/store.js
//
// these are just our types that we use throughout the projext
import { GET_ALL_ITEMS_DATA, POST_NEW_ITEM_DATA } from './types';
// This module holds the XMLHttpRequest and the functionality
// to dispatch other actions when the request succseeded or fails.
import request from './requests';

/**
 *This is our middle-war function
 * @param {*} store
 */
const middleware = store => next => action => {
  next(action);
  const req = request(next);
  switch (action.type){
  case GET_ALL_ITEMS_DATA:

    console.log('Make GET request', action.type);
    req({
      reqType:'GET',
      route:'http://localhost:3000/get-all',
      type: GET_ALL_ITEMS_DATA
    });
    break;
  case POST_NEW_ITEM_DATA:
    console.log('Make POST request', action.type);

    req({
      reqType:'POST',
      route:'http://localhost:3000/add',
      type: POST_NEW_ITEM_DATA,
      // below we are just creating a random ID for the entry in the DB
      body: action.body
    });
    break;
  default:
    break;
  }
};
export default middleware;
