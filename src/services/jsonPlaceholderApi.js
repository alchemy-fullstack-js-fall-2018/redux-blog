import { get } from './request';

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => { 
      return posts; 
    });
};

export const getPost = id => {
  return get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(post => { 
      return post; 
    });
};
