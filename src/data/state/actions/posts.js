import { getPosts } from '../../services/blogApi';

export const POSTS_UPDATE_SEARCH_TERM = 'POSTS_UPDATE_SEARCH_TERM';
export const postsUpdateSearchTerm = searchTerm => ({
  type: POSTS_UPDATE_SEARCH_TERM,
  payload: searchTerm
});

export const POSTS_LOAD_START = 'POSTS_LOAD_START';
export const POSTS_LOAD_END = 'POSTS_LOAD_END';
export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = searchTerm => ({
  type: FETCH_POSTS,
  loadStart: POSTS_LOAD_START,
  loadEnd: POSTS_LOAD_END,
  payload: getPosts(searchTerm)
});
