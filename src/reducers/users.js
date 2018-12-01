import { FETCH_USERS } from '../actions/users';

export default function reducer(state = [], { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return payload;
    default:
      return state;
  }
}
