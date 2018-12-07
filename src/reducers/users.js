import {
  FETCH_USERS,
  USERS_LOAD_START,
  USERS_LOAD_END
} from '../actions/user';

const initialState = {
  loading: false,
  list: []
};

export default function reducer( state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_USERS:
      return { ...state, list: payload };
    case USERS_LOAD_START:
      return { ...state, loading: true };
    case USERS_LOAD_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
