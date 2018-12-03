import { getPosts } from '../services/blogApi';

export const LOAD_POSTS_START = 'LOAD_POSTS_START';
export const LOAD_POSTS_END = 'LOAD_POSTS_END';
export const UPDATE_POSTS = 'UPDATE_POSTS';
export const fetchPostsPromise = () => ({
  type: UPDATE_POSTS,
  loadStart: LOAD_POSTS_START,
  loadEnd: LOAD_POSTS_END,
  payload: getPosts()
});
