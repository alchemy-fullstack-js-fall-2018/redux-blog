import { get } from './request';

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts').then(posts => {
    return posts;
  });
};

export const getPost = id => {
  return get(`https://jsonplaceholder.typicode.com/posts/${id}`).then(post => {
    return post;
  });
};

export const getComments = postId => {
  return get(
    `https://jsonplaceholder.typicode.com/comments?postId=${postId}`
  ).then(comments => {
    return comments;
  });
};

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users').then(users => {
    return users;
  });
};

export const getUser = id => {
  return get(`https://jsonplaceholder.typicode.com/users/${id}`).then(user => {
    return user;
  });
};
