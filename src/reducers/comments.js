import { FETCH_COMMENTS } from '../actions/comments';

export default function reducer(state = [], { type, payload }) {
  switch(type) {
    case FETCH_COMMENTS:
      return payload;
    default:
      return state;
  }
}
