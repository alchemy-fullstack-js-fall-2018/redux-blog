import { fetchCommentsPromise, UPDATE_COMMENTS, LOAD_COMMENTS_START, LOAD_COMMENTS_END } from './comments';

jest.mock('../services/blogApi.js');

describe('comments actions', () => {
  it('has a promise as a payload', () => {
    const action = fetchCommentsPromise();
    expect(typeof action.payload.then).toBe('function');
    expect(action.type).toEqual(UPDATE_COMMENTS);
    expect(action.loadStart).toEqual(LOAD_COMMENTS_START);
    expect(action.loadEnd).toEqual(LOAD_COMMENTS_END);
  });
});
