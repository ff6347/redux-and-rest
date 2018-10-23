import { createStore, applyMiddleware, compose } from 'redux';
import middleware from './middleware';
import reducers from './root-reducer';
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducers,
  composeEnhancers(applyMiddleware(middleware))
);

export default store;
