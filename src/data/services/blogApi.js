import { get } from '../lib/request';

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then((users) => ({ users: users }));
};

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => ({ posts: posts }));
};

export const getComments = () => {
  return get('https://jsonplaceholder.typicode.com/comments')
    .then((comments) => ({ comments: comments }));
};
