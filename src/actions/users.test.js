import { fetchUsersPromise, FETCH_USERS, LOAD_USERS_END, LOAD_USERS_START } from './users';

jest.mock('../services/blogApi.js');

describe('posts actions', () => {
  it('has a promise as a payload', () => {
    const action = fetchUsersPromise();
    expect(typeof action.payload.then).toBe('function');
    expect(action.type).toEqual(FETCH_USERS);
    expect(action.loadEnd).toEqual(LOAD_USERS_END);
    expect(action.loadStart).toEqual(LOAD_USERS_START);
  });
});
