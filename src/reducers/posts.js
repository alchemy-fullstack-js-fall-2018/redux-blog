import { FETCH_POSTS } from '../actions/posts';

const initialState = {
  searchTerm: '',
  list: []
};

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return { ...state, list: payload };
    default:
      return state;
  }
}
