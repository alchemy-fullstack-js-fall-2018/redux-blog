import { get } from './request';

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => { 
      return posts; 
    });
};
