import { fakePosts } from '../../fixtures/fakePosts';
import fakeUsers from '../fixtures/users.json';
import fakeComments from '../fixtures/comments.json';

export const getPosts = () => {
  return Promise.resolve(Object.values(fakePosts));
};

export const getUsers = () => {
  return Promise.resolve(fakeUsers);
};

export const getComments = id => {
  return Promise.resolve(fakeComments[id]);
};
