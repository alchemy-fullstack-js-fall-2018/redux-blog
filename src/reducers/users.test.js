import reducer from './users';
import { FETCH_USERS } from '../actions/users';
import { fakeUsers } from '../services/fixtures/fakeUsers';

describe('users reducer', () => {
  const state = {
    loading: false,
    users: []
  };

  it('returns the original state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles FETCH_USERS actions', () => {
    const newState = reducer(state, {
      type: FETCH_USERS,
      payload: fakeUsers
    });
    expect(newState).toEqual({ loading: false, users: fakeUsers });
  });
});
