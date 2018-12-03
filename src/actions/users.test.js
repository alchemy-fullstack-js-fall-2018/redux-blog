import { fetchUsers, FETCH_USERS } from '../actions/users';
import { getUsers as getUsersPromise } from '../services/blogService'

jest.mock('../services/blogService.js');

describe('users actions', () => {
  it('creates a FETCH_USERS action', () => {
    expect(fetchUsers()).toEqual({
      type: FETCH_USERS,
      payload: getUsersPromise()
    });
  });
});

// describe('artists actions', () => {
//   it('has a promise as its payload', () => {
//     const action = fetchArtistsPromise('SomeBand');
//     expect(typeof action.payload.then).toEqual('function');
//     expect(action.type).toEqual(UPDATE_ARTISTS);
//   });
// });
