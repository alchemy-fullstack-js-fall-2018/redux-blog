import { USERS_LOAD_START, USERS_LOAD_END, FETCH_USERS } from '../actions/user';

const initialState = {
  loading: false,
  list: []
},

export default function reducer( state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, list: payload.getUsers, pages: payload.pages };
    case USERS_LOAD_START:
      return { ...state, loading: true };
    case USERS_LOAD_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
