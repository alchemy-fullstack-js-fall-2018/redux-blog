import { fetchComments, FETCH_COMMENTS, COMMENTS_LOAD_START, COMMENTS_LOAD_END } from '../comments';

jest.mock('../../../services/blogApi.js');

describe('fetchComments', () => {
  test('has a promise as its payload', () => {
    const action = fetchComments();
    expect(typeof action.payload.then).toEqual('function');
    expect(action.type).toEqual(FETCH_COMMENTS);
    expect(action.loadStart).toEqual(COMMENTS_LOAD_START);
    expect(action.loadEnd).toEqual(COMMENTS_LOAD_END);
  });
});
