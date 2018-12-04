import {
  UPDATE_SEARCH_TERM,
  FETCH_POST,
  FETCH_POSTS
} from '../actions/posts';

const initialState = {
  list: [],
  searchTerm: ''
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return { ...state, list: payload };
    case FETCH_POST:
      return { ...state, list: [payload] };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    default:
      return state;
  }
}
