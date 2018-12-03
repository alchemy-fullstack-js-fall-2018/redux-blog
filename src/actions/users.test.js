import { fetchUsers, FETCH_USERS, LOAD_USERS_START, LOAD_USERS_END } from '../actions/users';
import { getUsers as getUsersPromise } from '../services/blogService';

jest.mock('../services/blogService.js');

describe('users actions', () => {
  it('creates a FETCH_USERS action with a promise as its payload', () => {
    expect(fetchUsers()).toEqual({
      type: FETCH_USERS,
      loadStart: LOAD_USERS_START,
      loadEnd: LOAD_USERS_END,
      payload: getUsersPromise()
    });
    const action = fetchUsers();
    expect(typeof action.payload.then).toEqual('function');
  });
});
