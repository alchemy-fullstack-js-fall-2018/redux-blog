import { get } from './request';

export const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts'
export const fetchPosts = () => {
  return get(POSTS_API_URL)
    .then(result => {
      return result;
    });
};
