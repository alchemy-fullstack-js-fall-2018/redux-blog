import mockUsers from './fixtures/users.json';
import mockPosts from './fixtures/posts.json';
import mockComments from './fixtures/comments.json';

import { getUsers, getPosts, getComments } from './blogService';

jest.mock('./request.js', id => ({
  get: url => {
    if(url.startsWith('https://jsonplaceholder.typicode.com/users')) {
      return Promise.resolve(mockUsers);
    } else if(url.startsWith('https://jsonplaceholder.typicode.com/posts')) {
      return Promise.resolve(mockPosts);
    } else if(url.startsWith('https://jsonplaceholder.typicode.com/comments')) {
      return Promise.resolve(mockComments
        .filter(comment => comment.postId === id));
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

  it('has a list of posts with userId, id, title, and body', () => {
    return getPosts()
      .then(posts => {
        posts.forEach(post => {
          expect(post).toEqual(expect.objectContaining({
            id: expect.any(Number),
            userId: expect.any(Number),
            title: expect.any(String),
            body: expect.any(String)
          }));
        });
      });
  });

  it('has a list of comments for a given postId with id, name, email, and body', () => {
    return getComments(1)
      .then(comments => {
        comments.forEach(comment => {
          expect(comment).toEqual(expect.objectContaining({
            postId: 1,
            id: expect.any(Number),
            name: expect.any(String),
            email: expect.any(String),
            body: expect.any(String)
          }));
        });
      });
  });
});


