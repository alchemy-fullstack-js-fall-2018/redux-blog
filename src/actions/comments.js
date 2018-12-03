import { fetchCommentsApi } from '../services/commentsApi';

export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = (id) => ({
  type: FETCH_COMMENTS,
  payload: fetchCommentsApi(id)
});
