import reducer from './users';
import { FETCH_USERS, USERS_LOAD_START, USERS_LOAD_END } from '../actions/users';


describe('user reducer', () => {
  const state = {
    list: [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      },
      {
        id: 2,
        name: 'Ervin Howell',
        username: 'Antonette',
        email: 'Shanna@melissa.tv'
      }
    ],
    loading: true
  };

  it('handles FETCH_USER action', () => {
    const newState = reducer(state, {
      type: FETCH_USERS,
      payload: [{ id: 3, name: 'A name', username: 'a username', email: 'a email' }]
    });

    expect(newState.list).toEqual([{ id: 3, name: 'A name', username: 'a username', email: 'a email' }]);
  });

  it('handles a USER_LOAD_START action', () => {
    const newState = reducer(state, {
      type: USERS_LOAD_START,
    });

    expect(newState.loading).toBe(true);
  });

  it('handles a USERS_LOAD_END action', () => {
    const newState = reducer(state, {
      type: USERS_LOAD_END,
    });

    expect(newState.loading).toBe(false);
  });
});
