import { UPDATE_POSTS } from '../actions/posts';

const initialState = {
  searchTerm: '',
  posts: []
};

export default function reducer(state = initialState, action) {
  console.log(action.type);
  switch(action.type) {
    case UPDATE_POSTS:
      return { ...state, posts: action.payload };
    default:
      return state;
  }
}
