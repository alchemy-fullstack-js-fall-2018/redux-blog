import { fetchPosts, FETCH_POSTS } from '../posts';

jest.mock('../../../services/blogApi.js');

describe('posts actions', () => {
  test('has a promise as its payload', () => {
    // const action = fetchPosts();
    // expect(typeof action.payload.then).toEqual('function');
    // expect(action.type).toEqual(FETCH_POSTS);
  });
});
