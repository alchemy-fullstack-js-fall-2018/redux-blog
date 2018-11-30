import { fetchUsers, FETCH_USERS, USERS_LOAD_START, USERS_LOAD_END } from '../users';

jest.mock('../../../services/blogApi.js');

describe('users actions', () => {
  test('has a promise as its payload', () => {
    const action = fetchUsers();
    expect(typeof action.payload.then).toEqual('function');
    expect(action.type).toEqual(FETCH_USERS);
    expect(action.loadStart).toEqual(USERS_LOAD_START);
    expect(action.loadEnd).toEqual(USERS_LOAD_END);
  });
});
