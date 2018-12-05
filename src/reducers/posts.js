import {
  FETCH_POSTS,
  FETCH_POST,
  UPDATE_POST_SEARCH_TERM
} from '../actions/posts';

const initialState = {
  searchTerm: '',
  list: [],
  post: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case UPDATE_POST_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case FETCH_POSTS:
      return { ...state, list: payload };
    case FETCH_POST:
      return { ...state, post: payload };
    default:
      return state;
  }
}
