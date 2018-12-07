import {
  LOAD_POSTS_START,
  LOAD_POSTS_END,
  FETCH_POSTS,
  UPDATE_POST_SEARCH_TERM
} from '../actions/posts';

const initialState = {
  loading: false,
  postList: [],
  searchTerm: ''
};

export default function reducer( state = initialState, {type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return { ...state, postList: payload };
    case LOAD_POSTS_START:
      return { ...state, loading: true };
    case LOAD_POSTS_END:
      return { ...state, loading: false };
    case UPDATE_POST_SEARCH_TERM:
      return { ...state, searchTerm: payload};
    default:
      return state;
  }
}
