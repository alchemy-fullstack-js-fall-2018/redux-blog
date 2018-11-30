import {
  fetchPosts, FETCH_POSTS,
  postsUpdateQuery, POSTS_UPDATE_QUERY,
  POSTS_LOAD_START, POSTS_LOAD_END
} from '../posts';

jest.mock('../../../services/blogApi.js');

describe('fetchPosts', () => {
  test('has a promise as its payload', () => {
    const action = fetchPosts('asdf');
    expect(action.payload.then).toBeInstanceOf(Function);
    expect(action.type).toEqual(FETCH_POSTS);
    expect(action.loadStart).toEqual(POSTS_LOAD_START);
    expect(action.loadEnd).toEqual(POSTS_LOAD_END);
  });
});

describe('fetchPosts', () => {
  test('has a promise as its payload', () => {
    const action = postsUpdateQuery('asdf');
    expect(typeof action.payload).toEqual('string');
    expect(action.type).toEqual(POSTS_UPDATE_QUERY);
  });
});
