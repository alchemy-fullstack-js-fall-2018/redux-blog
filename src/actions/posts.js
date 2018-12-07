import { getPosts } from '../services/blogService';

export const LOAD_POSTS_START = 'LOAD_POSTS_START';
export const LOAD_POSTS_END = 'LOAD_POSTS_END';

export const FETCH_POSTS = 'FETCH_POSTS';
export const fetchPosts = () => {
  return {
    type: FETCH_POSTS,
    loadStart: LOAD_POSTS_START,
    loadEnd: LOAD_POSTS_END,
    payload: getPosts()
  };
}

export const UPDATE_POST_SEARCH_TERM = 'UPDATE_POST_SEARCH_TERM';
export const updatePostSearchTerm = searchTerm => ({
  type: UPDATE_POST_SEARCH_TERM,
  payload: searchTerm
});
