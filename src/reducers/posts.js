import {
  UPDATE_SEARCH_TERM,
  FETCH_POST,
  FETCH_POSTS,
  POSTS_LOAD_START,
  POSTS_LOAD_END
} from '../actions/posts';

const initialState = {
  list: [],
  searchTerm: '',
  isLoading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return { ...state, list: payload };
    case FETCH_POST:
      return { ...state, list: [payload] };
    case UPDATE_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case POSTS_LOAD_START:
      return { ...state, isLoading: true };
    case POSTS_LOAD_END:
      return { ...state, isLoading: false };
    default:
      return state;
  }
}
