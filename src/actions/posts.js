import { getPosts } from '../services/blogService';

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const updatePostSearchTerm = searchTerm => ({
  type: UPDATE_POST_SEARCH_TERM,
  payload: searchTerm
});

export const POSTS_LOAD_START = 'POSTS_LOAD_START';
export const POSTS_LOAD_END = 'POSTS_LOAD_END';
export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => ({
  type: FETCH_POSTS,
  loadStart: POSTS_LOAD_START,
  loadEnd: POSTS_LOAD_END,
  payload: getPosts()
});
