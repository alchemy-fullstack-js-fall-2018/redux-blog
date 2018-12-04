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
    console.log('returned comments', comments);
    return comments;
  });
};
