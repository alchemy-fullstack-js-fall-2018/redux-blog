import mockUsersJson from '../../../testing/fixtures/users.json';
import mockPostsJson from '../../../testing/fixtures/posts.json';
import mockCommentsJson from '../../../testing/fixtures/comments.json';

const users = JSON.stringify(mockUsersJson);
const posts = JSON.stringify(mockPostsJson);
const comments = JSON.stringify(mockCommentsJson);

export const getUsers = () => {
  return Promise.resolve(users);
};
export const getPosts = () => {
  return Promise.resolve(posts);
};
export const getComments = () => {
  return Promise.resolve(comments);
};
