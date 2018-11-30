import { fetchPosts, FETCH_POSTS, POSTS_LOAD_START, POSTS_LOAD_END } from '../posts';

jest.mock('../../../services/blogApi.js');

describe('posts actions', () => {
  test('has a promise as its payload', () => {
    const action = fetchPosts('asdf');
    expect(typeof action.payload.then).toEqual('function');
    expect(action.type).toEqual(FETCH_POSTS);
    expect(action.loadStart).toEqual(POSTS_LOAD_START);
    expect(action.loadEnd).toEqual(POSTS_LOAD_END);
  });
});
