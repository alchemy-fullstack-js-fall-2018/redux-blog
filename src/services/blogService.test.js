import { getComments, getUsers, getPosts } from './blogService';
import mockCommentsJson from './fixtures/comments.json';
import mockPostsJson from './fixtures/posts.json';
import mockUsersJson from './fixtures/users.json';

jest.mock('./request.js', () => ({
  get: url => {
    if(url.startsWith('https://jsonplaceholder.typicode.com/users')) {
      return Promise.resolve(mockUsersJson);
    } else if(url.startsWith('https://jsonplaceholder.typicode.com/posts')) {
      return Promise.resolve(mockPostsJson);
    } else if(url.startsWith('https://jsonplaceholder.typicode.com/comments/?postId')) {
      return Promise.resolve(mockCommentsJson);
    } else {
      return Promise.reject({ error: '404' });
    }
  }
}));

describe('getUsers', () => {
  it('gets a list of users from the API', () => {
    return getUsers()
      .then(users => {
        users.forEach(user => {
          expect(user).toEqual({
            id: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            address: expect.any(Object),
            phone: expect.any(String),
            website: expect.any(String),
            company: expect.any(Object)
          });
        });
      });
  });
});

describe('getPosts', () => {
  it('gets a list of posts from the API', () => {
    return getPosts()
      .then(posts => {
        posts.forEach(post => {
          expect(post).toEqual({
            userId: expect.any(Number),
            id: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String)
          });
        });
      });
  });
});

describe('getComments', () => {
  it('gets a list comments from the API belonging to one post', () => {
    return getComments()
      .then(comments => {
        comments.forEach(comment => {
          expect(comment).toEqual({
            postId: undefined, /* WHY? */
            id: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            body: expect.any(String)
          });
        });
      });
  });
});
