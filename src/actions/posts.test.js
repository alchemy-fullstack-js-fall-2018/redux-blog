import { fetchPostsPromise, UPDATE_POSTS, LOAD_POSTS_START, LOAD_POSTS_END } from './posts';

jest.mock('../services/blogApi.js');

describe('posts actions', () => {
  it('has a promise as a payload', () => {
    const action = fetchPostsPromise();
    expect(typeof action.payload.then).toBe('function');
    expect(action.type).toEqual(UPDATE_POSTS);
    expect(action.loadStart).toEqual(LOAD_POSTS_START);
    expect(action.loadEnd).toEqual(LOAD_POSTS_END);
  });
});
