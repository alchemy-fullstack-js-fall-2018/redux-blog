import { get } from './request';

export const getComments = (id) => {

  return get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(comments => ([...comments]));
};

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users')
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

console.log(getUsers);

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/Posts')
    .then(posts => ([...posts]));
};
