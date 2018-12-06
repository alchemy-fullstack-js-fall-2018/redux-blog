import { getComments } from '../services/jsonPlaceholderApi';

export const FETCH_COMMENTS_LOADING = 'FETCH_COMMENTS_START';
export const FETCH_COMMENTS_DONE = 'FETCH_COMMENTS_DONE';
export const FETCH_COMMENTS = 'FETCH_COMMENTS';
export const fetchComments = postId => ({
  type: FETCH_COMMENTS,
  loadStart: FETCH_COMMENTS_LOADING,
  loadEnd: FETCH_COMMENTS_DONE,
  payload: getComments(postId)
});
