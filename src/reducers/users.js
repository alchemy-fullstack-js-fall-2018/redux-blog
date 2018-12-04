import { FETCH_USERS, LOAD_USERS_START, LOAD_USERS_END } from '../actions/users';
import { fakeUsers } from '../services/fixtures/fakeUsers';

const initialState = {
  loading: false,
  users: fakeUsers
};

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
