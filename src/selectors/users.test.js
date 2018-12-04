import { getUsers } from './users';
import { fakeUsers } from '../services/fixtures/fakeUsers';

const state = {
  loading: false,
  users: fakeUsers
};

describe('users selectors', () => {
  it('getUsers gets all the users', () => {

    const allUsers = getUsers(state);
    fakeUsers.forEach(user => {
      expect(allUsers).toContainEqual(user);
    });
  });
});
