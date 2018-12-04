import { getUsers } from './users';
import mockUsersJson from '../services/fixtures/users.json';

describe('users', () => {
  const state = {
    users: {
      list: mockUsersJson,
      loading: false
    }
  };
  it('gets a list of users from state', () => {
    expect(getUsers(state)).toEqual(mockUsersJson);
  });
});
