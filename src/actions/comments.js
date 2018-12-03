import { getComments } from '../services/blogApi';

export const LOAD_COMMENTS_START = 'LOAD_COMMENTS_START';
export const LOAD_COMMENTS_END = 'LOAD_COMMENTS_END';
export const UPDATE_COMMENTS = 'UPDATE_COMMENTS';
export const fetchCommentsPromise = () => ({
  type: UPDATE_COMMENTS,
  loadStart: LOAD_COMMENTS_START,
  loadEnd: LOAD_COMMENTS_END,
  payload: getComments()
});
