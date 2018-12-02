import { get } from './request';

export const fetchCommentsApi = (postId) => {
  return get(`https://jsonplaceholder.typicode.com/post/${postId}/comments`)
    .then(result => {
      return result;
    });
};
