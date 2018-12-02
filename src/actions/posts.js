import { fetchPostsApi } from '../services/postsApi'

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: fetchPostsApi()
});
