import reducer from './users';
import {
  FETCH_USERS,
  USERS_LOAD_END,
  USERS_LOAD_START
} from '../actions/users';

describe('users reducer tests', () => {

  const state = {
    isLoading: false,
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
    ]
  };

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles FETCH_USERS action', () => {
    const replacement = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    ];
    const resultState = { ...state };
    resultState.list = replacement;
    const newState = reducer (state, { type: FETCH_USERS, payload: replacement });
    expect(newState).toEqual(resultState);
  });

  it('handles USERS_LOAD_START/USERS_LOAD_END actions', () => {
    let newState = reducer (state, { type: USERS_LOAD_START });
    expect(newState.isLoading).toEqual(true);
    newState = reducer (state, { type: USERS_LOAD_END });
    expect(newState.isLoading).toEqual(false);
  });

});
