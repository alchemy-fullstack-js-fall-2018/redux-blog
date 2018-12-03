import { fetchPostsApi, fetchPostApi } from '../services/postsApi';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  payload: fetchPostsApi()
});

export const FETCH_POST = 'FETCH_POST';
export const fetchPost = id => ({
  type: FETCH_POST,
  payload: fetchPostApi(id)
});

export const UPDATE_SEARCH_TERM = 'UPDATE_SEARCH_TERM';
export const updateSearchTerm = searchTerm => ({
  type: UPDATE_SEARCH_TERM,
  payload: searchTerm
});
