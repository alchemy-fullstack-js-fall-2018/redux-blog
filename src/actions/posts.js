import { getPosts, getPost } from '../services/jsonPlaceholderApi';

export const FETCH_POSTS_LOADING = 'FETCH_POSTS_START';
export const FETCH_POSTS_DONE = 'FETCH_POSTS_DONE';
export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  loadStart: FETCH_POSTS_LOADING,
  loadEnd: FETCH_POSTS_DONE,
  payload: getPosts()
});

export const FETCH_POST_LOADING = 'FETCH_POST_START';
export const FETCH_POST_DONE = 'FETCH_POST_DONE';
export const FETCH_POST = 'FETCH_POST';
export const fetchPost = id => ({
  type: FETCH_POST,
  loadStart: FETCH_POST_LOADING,
  loadEnd: FETCH_POST_DONE,
  payload: getPost(id)
});

export const UPDATE_POST_SEARCH_TERM_LOADING =
  'UPDATE_POST_SEARCH_TERM_LOADING';
export const UPDATE_POST_SEARCH_TERM_DONE = 'UPDATE_POST_SEARCH_TERM_DONE';
export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const updatePostSearchTerm = searchTerm => ({
  type: UPDATE_POST_SEARCH_TERM,
  loadStart: UPDATE_POST_SEARCH_TERM_LOADING,
  loadEnd: UPDATE_POST_SEARCH_TERM_DONE,
  payload: searchTerm
});
