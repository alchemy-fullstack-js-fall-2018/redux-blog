import {
  FETCH_POST,
  fetchPost,
  FETCH_POSTS,
  fetchPosts
} from './posts';

jest.mock('../services/postsApi');

describe('fetchPosts (all posts) action', () => {
  it('has a promise as a payload', () => {
    const action = fetchPosts();
    expect(typeof action.payload).toEqual('object');
    expect(action.type).toEqual(FETCH_POSTS);
  });
});

describe('fetchPost (one posts) action', () => {
  it('has a promise as a payload', () => {
    const id = 1;
    const action = fetchPost(id);
    expect(typeof action.payload).toEqual('object');
    expect(action.type).toEqual(FETCH_POST);
  });
});
