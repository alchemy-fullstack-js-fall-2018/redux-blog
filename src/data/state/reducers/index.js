import { combineReducers } from 'redux';
import carReducer from './cars';

export default combineReducers({
  cars: carReducer
});
