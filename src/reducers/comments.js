import { UPDATE_COMMENTS, LOAD_COMMENTS_END, LOAD_COMMENTS_START } from '../actions/comments';

const initialState = {
  loading: false,
  comments: []
};
export default function reducer(state = initialState, action) {
  const { type, payload } = action;
  switch(type) {
    case UPDATE_COMMENTS:
      return { ...state, comments: payload };
    case LOAD_COMMENTS_START:
      return { ...state, loading: true };
    case LOAD_COMMENTS_END:
      return { ...state, loading: false };
    default:
      return state;
  }
}
