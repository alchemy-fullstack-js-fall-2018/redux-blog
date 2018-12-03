import { fetchPosts, FETCH_POSTS } from '../actions/posts';
import { getPosts as getPostsPromise } from '../services/blogService';

jest.mock('../services/blogService.js');

describe('posts actions', () => {
  it('creates a FETCH_POSTS action with a promise as its payload', () => {
    expect(fetchPosts()).toEqual({
      type: FETCH_POSTS,
      payload: getPostsPromise()
    });
    const action = fetchPosts();
    expect(typeof action.payload.then).toEqual('function');
  });
});
