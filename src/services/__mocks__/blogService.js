import mockUsersJson from '../fixtures/users.json';
import mockPostsJson from '../fixtures/posts.json';
import mockCommentsJson from '../fixtures/comments.json';

const users = JSON.stringify(mockUsersJson);
const posts = JSON.stringify(mockPostsJson);
const comments = JSON.stringify(mockCommentsJson);


export const getPosts = () => {
  return Promise.resolve(posts);
};

export const getUsers = () => {
  return Promise.resolve(users);
};

export const getComments = () => {
  return Promise.resolve(comments);
};



