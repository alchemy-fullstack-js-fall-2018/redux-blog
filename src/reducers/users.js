import { FETCH_USERS, FETCH_USER } from '../actions/users';

export default function reducer(state = [], { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return payload;
    case FETCH_USER:
      return [payload];
    default:
      return state;
  }
}
