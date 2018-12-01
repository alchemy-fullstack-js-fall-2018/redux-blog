import { getPosts } from '../services/blogService';

export const POSTS_UPDATE_QUERY = 'POSTS_UPDATE_QUERY';
export const postsUpdateQuery = query => ({
  type: POSTS_UPDATE_QUERY,
  payload: query
});

export const POSTS_LOAD_START = 'POSTS_LOAD_START';
export const POSTS_LOAD_END = 'POSTS_LOAD_END';
export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = query => ({
  type: FETCH_POSTS,
  loadStart: POSTS_LOAD_START,
  loadEnd: POSTS_LOAD_END,
  payload: getPosts(query)
});
