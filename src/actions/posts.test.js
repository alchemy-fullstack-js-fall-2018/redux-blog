import { fetchPostsPromise, UPDATE_POSTS } from './posts';

jest.mock('../services/blogApi.js');

describe('posts actions', () => {
  it('has a promise as a payload', () => {
    const action = fetchPostsPromise();
    expect(typeof action.payload.then).toBe('function');
    expect(action.type).toEqual(UPDATE_POSTS);
  });
});
