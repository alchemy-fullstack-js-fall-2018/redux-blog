import {
  fetchUsers, FETCH_USERS,
  USERS_LOAD_START, USERS_LOAD_END
} from '../users';

jest.mock('../../../services/blogApi.js');

describe('fetchUsers', () => {
  test('payload is a promise', () => {
    const action = fetchUsers();
    expect(action.payload.then).toBeInstanceOf(Function);
  });
  test('action has the proper additional properties', () => {
    const action = fetchUsers();
    expect(action.type).toEqual(FETCH_USERS);
    expect(action.loadStart).toEqual(USERS_LOAD_START);
    expect(action.loadEnd).toEqual(USERS_LOAD_END);
  });
});
