import { FETCH_COMMENTS } from '../actions/comments';

const initialState = [];

export default function reducer(state = initialState, { type, payload }) {
  switch(type) {
    case FETCH_COMMENTS:
      return payload;
    default:
      return state;
  }
}
