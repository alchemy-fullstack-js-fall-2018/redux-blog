import { getPosts } from '../services/blogApi';

export const UPDATE_POSTS = 'UPDATE_POSTS';
export const fetchPostsPromise = () => ({
  type: UPDATE_POSTS,
  payload: getPosts()
});
