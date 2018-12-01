import reducer from './users';
import { FETCH_USERS, fetchUsers } from '../actions/users';

describe('users reducer tests', () => {

  const state = [
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
  ];

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('fetches users', () => {
    const replacement = [
      {
        id: 1,
        name: 'Leanne Graham',
        username: 'Bret',
        email: 'Sincere@april.biz'
      }
    ];
    const newState = reducer (state, { type: FETCH_USERS, payload: replacement });
    expect(newState).toEqual(replacement);
  });
});
