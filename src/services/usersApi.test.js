import { fetchUsersApi } from './usersApi';
import mockUsersJson from './fixtures/mockUsersJson';

jest.mock('./request.js', () => ({
  get: url => {
    if(url === 'https://jsonplaceholder.typicode.com/users') {
      return Promise.resolve(mockUsersJson);
    } else {
      return Promise.reject('404');
    }
  }
}));

describe('user api service', () => {
  it('gets list of users from api', () => {
    return fetchUsersApi()
      .then(results => {
        expect(results.length).toEqual(10);
      });
  });
});
