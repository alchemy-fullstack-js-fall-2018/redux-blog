import { getPosts, getUsers } from './blogApi';

jest.mock('./blogApi.js');

describe('blogApi', () => {
  describe('getPosts', () => {
    it('gets a list of blog posts in proper format', () => {
      return getPosts()
        .then(result => {
          expect(result[0].body).toBeTruthy();
          expect(result[0].id).toBeTruthy();
          expect(result[0].title).toBeTruthy();
        });
    });
  });

  describe('getUsers', () => {
    it('gets a list of users', () => {
      return getUsers()
        .then(users => {
          users.forEach(user => {
            expect(user).toEqual(expect.objectContaining(
              { name: expect.any(String),
                id: expect.any(Number),
                email: expect.any(String)
              }
            ));
          });
        });
    });
  });
});
