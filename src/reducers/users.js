import {
  FETCH_USERS,
  FETCH_USER,
  USERS_LOAD_END,
  USERS_LOAD_START
} from '../actions/users';

const initialState = {
  list: [],
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, list: payload };
    case FETCH_USER:
      return { ...state, list:[payload] };
    case USERS_LOAD_START:
      return { ...state, isLoading: true };
    case USERS_LOAD_END:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
