import { FETCH_USERS, USERS_LOAD_START, USERS_LOAD_END } from '../actions/users';

const initialState = {
  list: [],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  // console.log(payload);
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
