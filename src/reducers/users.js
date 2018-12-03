import { FETCH_USERS, LOAD_USERS_START, LOAD_USERS_END } from '../actions/users';

const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, users: payload };
    case LOAD_USERS_START:
      return { ...state, loading: true };
    case LOAD_USERS_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
