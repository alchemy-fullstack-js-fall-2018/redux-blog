import { fetchUsers, FETCH_USERS } from '../users';

jest.mock('../../../services/blogApi.js');

describe('users actions', () => {
  test('has a promise as its payload', () => {
    const action = fetchUsers();
    expect(typeof action.payload.then).toEqual('function');
    expect(action.type).toEqual(FETCH_USERS);
  });
});
