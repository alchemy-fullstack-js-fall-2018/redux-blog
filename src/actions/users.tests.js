import {
  FETCH_USER,
  fetchUser,
  FETCH_USERS,
  fetchUsers
} from './users';

jest.mock('../services/usersApi');

describe('fetchUsers (all users) action', () => {
  it('has a promise as a payload', () => {
    const action = fetchUsers();
    expect(typeof action.payload).toEqual('object');
    expect(action.type).toEqual(FETCH_USERS);
  });
});

describe('fetchUser (one user) action', () => {
  it('has a promise as a payload', () => {
    const id = 1;
    const action = fetchUser(id);
    expect(typeof action.payload).toEqual('object');
    expect(action.type).toEqual(FETCH_USER);
  });
});
