import { getComments, getUsers, getPosts } from './blogService';
import mockCommentsJson from './fixtures/comments.json';
import mockPostsJson from './fixtures/posts.json';
import mockUsersJson from './fixtures/users.json';

jest.mock('./request.js', () => ({
  get: url => {
    if(url.startsWith('https://jsonplaceholder.typicode.com/users')) {
      return Promise.resolve(mockUsersJson);
    }
    else {
      return Promise.reject({ error: '404' });
    }
  }
}));

describe('getUsers', () => {
  it('gets a list of users from the API', () => {
    return getUsers()
      .then(users => {
        console.log(users);
        expect(users).toBeTruthy();
      });
  });
});

// describe('getComments', () => {
//   it('gets a list of comments from the API', () => {
//     const comments = getComments()
//   });
// });
