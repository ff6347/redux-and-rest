import { combineReducers } from 'redux';
import loading from './reducers/loading';
import errors from './reducers/error';
import id from './reducers/id';
import items from './reducers/items';
import postResponse from './reducers/post-response';


const reducers = combineReducers({
  loading:loading,
  errors:errors,
  items:items,
  postResponse: postResponse,
  id: id
});
export default reducers;
