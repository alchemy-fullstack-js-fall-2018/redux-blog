import { FETCH_POSTS, FETCH_POST } from '../actions/posts';

const initialState = {
  searchTerm: '',
  list: [],
  post: null
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return { ...state, list: payload };
    case FETCH_POST:
      return { ...state, post: payload };
    default:
      return state;
  }
}
