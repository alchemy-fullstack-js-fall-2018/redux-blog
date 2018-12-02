import { FETCH_POSTS } from '../actions/posts';

export default function reducer(state = [], { type, payload }) {
  switch(type) {
    case FETCH_POSTS:
      return payload;
    default:
      return state;
  }
}
