import { UPDATE_POSTS, LOAD_POSTS_START, LOAD_POSTS_END } from '../actions/posts';

const initialState = {
  searchTerm: '',
  loading: false,
  posts: []
};

export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_POSTS:
      return { ...state, posts: payload };
    case LOAD_POSTS_START:
      return { ...state, loading: true };
    case LOAD_POSTS_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
