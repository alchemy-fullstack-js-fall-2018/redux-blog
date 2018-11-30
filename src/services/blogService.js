import { get } from './request';

// https://jsonplaceholder.typicode.com/todos/1

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then(users => {
      return {
        users: users.map(user => ({
          name: user.name,
          username: user.username,
          email: user.email,
          id: user.id
        }))
      };
    });
};

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then(posts => {
      return {
        posts: posts.map(post => ({
          title: post.title,
          body: post.body,
          userId: post.userId,
          id: post.id
        }))
      };
    });
};

export const getComments = (id) => {
  return get(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(comments => {
      return {
        comments: comments.map(comment => ({
          name: comment.name,
          email: comment.email,
          body: comment.body,
          postId: comment.postId,
          id: comment.id
        }))
      };
    });
};
