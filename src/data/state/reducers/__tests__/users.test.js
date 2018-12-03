import reducer from '../users';
import { FETCH_USERS, USERS_LOAD_START, USERS_LOAD_END } from '../../actions/users';
import mockUsersJson from '../../../../testing/fixtures/users.json';
import { mockUsers } from '../../../../testing/fixtures/users';

describe('user reducer', () => {

  const state = {
    list: mockUsersJson,
    loading: true
  };

  test('handles FETCH_USERS action', () => {
    const newState = reducer(state, {
      type: FETCH_USERS,
      payload: mockUsers
    });
    expect(newState.list[0]).toEqual(mockUsers[0]);
    expect(newState.list.length).toEqual(mockUsers.length);
  });

  test('handles USERS_LOAD_START action', () => {
    const newState = reducer(state, { type: USERS_LOAD_START });
    expect(newState.loading).toBe(true);
  });

  test('handles USERS_LOAD_END action', () => {
    const newState = reducer(state, { type: USERS_LOAD_END });
    expect(newState.loading).toBe(false);
  });

  test('ignore invalid actions', () => {
    const newState = reducer(state, {
      type: 'MADE_UP_TYPE',
      payload: 'asdf'
    });
    expect(newState).toEqual(state);
  });
});
