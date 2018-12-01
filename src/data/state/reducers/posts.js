import { FETCH_POSTS, POSTS_LOAD_START, POSTS_LOAD_END, POSTS_UPDATE_QUERY } from '../actions/posts';
import mockPosts from '../../../testing/fixtures/posts.json';

const initialState = {
  list: mockPosts,
  query: '',
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return { ...state, list: [...payload] };
    case POSTS_LOAD_START:
      return { ...state, loading: true };
    case POSTS_LOAD_END:
      return { ...state, loading: false };
    case POSTS_UPDATE_QUERY:
      return { ...state, query: payload };
    default:
      return state;
  }
}
