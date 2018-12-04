import { fetchPostsApi, fetchPostApi } from '../services/postsApi';

export const POSTS_LOAD_START = 'POSTS_LOAD_START';
export const POSTS_LOAD_END = 'POSTS_LOAD_END';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  loadStart: POSTS_LOAD_START,
  loadEnd: POSTS_LOAD_END,
  payload: fetchPostsApi()
});

export const FETCH_POST = 'FETCH_POST';
export const fetchPost = id => ({
  type: FETCH_POST,
  loadStart: POSTS_LOAD_START,
  loadEnd: POSTS_LOAD_END,
  payload: fetchPostApi(id)
});

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm
});
