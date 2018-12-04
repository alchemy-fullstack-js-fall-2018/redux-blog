import { get } from './request';

export const getComments = postId => {
  return get(`https://jsonplaceholder.typicode.com/comments/?postId=${postId}`)
    .then(comments => {
      return comments.map(comment => ({
        postId,
        id: comment.id,
        name: comment.name,
        email: comment.email,
        body: comment.body
      }));
    });
};

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      return users.map(user => ({
        id: user.id,
        name: user.name,
        email: user.email,
        address: user.address,
        phone: user.phone,
        website: user.website,
        company: user.company
      }));
    });
};

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => {
      return posts.map(post => ({
        userId: post.userId,
        id: post.id,
        title: post.title,
        body: post.body
      }));
    });
};
