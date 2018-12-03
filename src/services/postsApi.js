import { get } from './request';

export const POSTS_API_URL = 'https://jsonplaceholder.typicode.com/posts';
export const fetchPostsApi = () => {
  return get(POSTS_API_URL)
    .then(result => {
      return result;
    });
};

export const fetchPostApi = (id) => {
  return get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(result => {
      return result;
    });
};
