import { get } from './request';

export const fetchCommentsApi = (postId) => {
  return get(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
    .then(result => {
      console.log('comments', result, 'postId', postId);
      return result;
    });
};
