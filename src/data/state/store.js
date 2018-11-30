/* eslint-disable no-console */

import { createStore } from 'redux';
import reducer from './reducers'; // same as './reducers/index'

const store = createStore(
  reducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

store.subscribe(() => {
  store.getState();
  console.log('State Changes!', store.getState());
});

console.log('Initial State', store.getState());

export default store;
