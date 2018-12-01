import mockUsersJson from '../fixtures/users.json';
import mockPostsJson from '../fixtures/posts.json';
import mockCommentsJson from '../fixtures/comments.json';

const users = JSON.stringify(mockUsersJson);
const posts = JSON.stringify(mockPostsJson);
const comments = JSON.stringify(mockCommentsJson);


export const getUsers = () => {
  return Promise.resolve(users);
};
export const getPosts = () => {
  return Promise.resolve(posts);
};
export const getComments = id => {
  const postComments = mockCommentsJson.filter(comment => comment.postId === id);
  return Promise.resolve(postComments);
};



