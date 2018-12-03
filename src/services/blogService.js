import { getRequest } from './request';

export const getComments = (id) => {

  return getRequest(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(comments => ([...comments]));
};

export const getUsers = () => {
  return getRequest('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      return {
        users: users.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email
        }))
      };
    });
};

export const getPosts = () => {
  return getRequest('https://jsonplaceholder.typicode.com/Posts')
    .then(posts => ([...posts]));
};
