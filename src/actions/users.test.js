import {
  fetchUsers,
  FETCH_USERS,
  USERS_LOAD_START,
  USERS_LOAD_END
} from './users';

jest.mock('../services/blogService');

describe('users', () => {
  it('payload of FETCH_USERS is a promise', () => {
    const action = fetchUsers();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  test('has a type fetch users, a load start and load end property', () => {
    const action = fetchUsers();
    expect(action.type).toEqual(FETCH_USERS);
    expect(action.loadStart).toEqual(USERS_LOAD_START);
    expect(action.loadEnd).toEqual(USERS_LOAD_END);
  });

});
