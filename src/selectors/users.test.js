import {
  getUsers,
  isLoading
} from './users';

describe('user selector tests', () => {

  const state = {
    users: {
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
    }
  };

  it('gets users', () => {
    const result = getUsers(state);
    expect(result).toEqual(state.users.list);
  });

  it('gets loading status', () => {
    const result = isLoading(state);
    expect(result).toEqual(state.users.isLoading);
  });

});
