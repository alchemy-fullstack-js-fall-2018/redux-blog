import { get } from './request';

export const getComments = postId => {
  //comments.filter() by postId?
};

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      return users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
      }));
    });
};

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => {
      posts.map(post => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
      }));
    });
};
