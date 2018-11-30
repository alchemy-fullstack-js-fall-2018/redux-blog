import { fetchComments, FETCH_COMMENTS } from '../comments';

jest.mock('../../../services/blogApi.js');

describe('comments actions', () => {
  test('has a promise as its payload', () => {
    const action = fetchComments();
    expect(typeof action.payload.then).toEqual('function');
    expect(action.type).toEqual(FETCH_COMMENTS);
  });
});
