import { UPDATE_POSTS } from '../actions/posts';

const initialState = {
  searchTerm: '',
  posts: []
};

export default function reducer(state = initialState, action) {
  switch(action.type) {
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
