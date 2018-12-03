import reducer from './users';
import { UPDATE_USERS } from '../actions/users';
import { fakeUsers } from '../fixtures/fakeUsers';

const initialState = {
  loading: false,
  users: fakeUsers
};

describe('users reducer', () => {
  it('handles UPDATE_USERS action', () => {
    const updatedState = reducer(initialState, { type: UPDATE_USERS, payload: fakeUsers });
    expect(updatedState).toEqual({ loading: false, users: fakeUsers });
  });
});
