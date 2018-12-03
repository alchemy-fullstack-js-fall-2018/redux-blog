import { getPosts as getPostsPromise } from '../services/blogService';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: getPostsPromise()
});
