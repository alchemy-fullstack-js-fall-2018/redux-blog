import {
  fetchComments, FETCH_COMMENTS,
  COMMENTS_LOAD_START, COMMENTS_LOAD_END
} from '../comments';

jest.mock('../../../services/blogApi.js');

describe('fetchComments', () => {
  test('payload is a promise', () => {
    const action = fetchComments();
    expect(action.payload.then).toBeInstanceOf(Function);
  });
  test('action has the proper additional properties', () => {
    const action = fetchComments();
    expect(action.type).toEqual(FETCH_COMMENTS);
    expect(action.loadStart).toEqual(COMMENTS_LOAD_START);
    expect(action.loadEnd).toEqual(COMMENTS_LOAD_END);
  });
});
