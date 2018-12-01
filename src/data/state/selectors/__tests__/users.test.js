import { getUsers } from '../users';
import { mockUsers } from '../../../../testing/fixtures/users';

describe('user selector', () => {
  const state = {
    users: {
      list: mockUsers,
      loading: false
    }
  };

  test('gets user list from state', () => {
    expect(getUsers(state)).toEqual(mockUsers);
  });

});
