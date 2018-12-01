import mockUsers from './fixtures/users.json';
import mockPosts from './fixtures/posts.json';
import mockComments from './fixtures/comments.json';

import { getUsers, getPosts, getComments } from './blogService';

jest.mock('./request.js', () => ({
  get: url => {
    if(url.startsWith('https://jsonplaceholder.typicode.com/users')) {
      return Promise.resolve(mockUsers);
    } else if(url.startsWith('https://jsonplaceholder.typicode.com/posts')) {
      return Promise.resolve(mockPosts);
    } else if(url.startsWith('https://jsonplaceholder.typicode.com/comments?postId=')) {
      return Promise.resolve(mockComments);
    } else {
      return Promise.reject({ error: '404' });
    }
  }
}));

describe('blogService', () => {
  it('gets a list of Users with name, username, email and id', () => {
    return getUsers()
      .then(results => {
        results.forEach(user => {
          expect(user).toEqual(expect.objectContaining({
            name: expect.any(String),
            email: expect.any(String),
            username: expect.any(String),
            id: expect.any(Number)
          }));
        });
      });
  });

});
