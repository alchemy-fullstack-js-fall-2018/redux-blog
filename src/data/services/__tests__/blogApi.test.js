import mockUsersJson from '../../../testing/fixtures/users.json';
import { getUsers, getPosts, getComments } from '../blogApi';

jest.mock('../../lib/request.js', () => ({
  get: url => {
    if(url.startsWith('https://jsonplaceholder.typicode.com/posts')) {
      return Promise.resolve(mockUsersJson);
    }
    else {
      return Promise.reject({ error: '404' });
    }
  }
}));

describe('blogApi', () => {

  describe('getUsers', () => {

    it('has a list of users with user details', () => {
      return getUsers()
        .then(results => {
          results.users.forEach(user => {
            expect(user).toEqual(expect.objectContaining({
              id: expect.any(Number),
              name: expect.any(String),
              username: expect.any(String),
              email: expect.any(String),
              address: expect.objectContaining({
                street: expect.any(String),
                suite: expect.any(String),
                city: expect.any(String),
                zipcode: expect.any(String),
                geo: expect.objectContaining({
                  lat: expect.any(String),
                  lng: expect.any(String)
                })
              }),
              phone: expect.any(String),
              website: expect.any(String),
              company: expect.objectContaining({
                name: expect.any(String),
                catchPhrase: expect.any(String),
                bs: expect.any(String),
              }),
            }));
          });
        });
    });
  });

});
