import { get } from './request';

// https://jsonplaceholder.typicode.com/todos/1

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      return users.map(user => ({
        name: user.name,
        username: user.username,
        email: user.email,
        id: user.id
      }));
    });
};

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => ([...posts]));
};

export const getComments = id => {
  return get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(comments => ([...comments]));
};
