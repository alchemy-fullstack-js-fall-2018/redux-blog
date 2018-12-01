import { FETCH_USERS, USERS_LOAD_START, USERS_LOAD_END } from '../actions/users';
import mockUsers from '../../../testing/fixtures/users.json';

const initialState = {
  list: mockUsers,
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, list: [...payload] };
    case USERS_LOAD_START:
      return { ...state, loading: true };
    case USERS_LOAD_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
