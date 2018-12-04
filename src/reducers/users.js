import { FETCH_USERS, FETCH_USER } from '../actions/users';

const initialState = {
  searchTerm: '',
  list: [],
  user: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, list: payload };
    case FETCH_USER:
      return { ...state, user: payload };
    default:
      return state;
  }
}
