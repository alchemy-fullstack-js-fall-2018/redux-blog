import {
  FETCH_POSTS,
  UPDATE_POSTS_SEARCH_TERM,
  POSTS_LOAD_START,
  POSTS_LOAD_END
} from '../actions/posts';

const initialState = {
  searchTerm: '',
  list: [
    {
      userId: 1,
      id: 1,
      title: 'a title',
      body: 'a body'
    },
    {
      userId: 1,
      id: 2,
      title: 'another title',
      body: 'another body'
    }
  ],
  loading: false
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return { ...state, list: [...payload] };
    case UPDATE_POSTS_SEARCH_TERM:
      return { ...state, searchTerm: payload };
    case POSTS_LOAD_START:
      return { ...state, loading: true };
    case POSTS_LOAD_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
