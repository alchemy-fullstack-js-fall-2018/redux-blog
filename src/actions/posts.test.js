import {
  FETCH_POST,
  fetchPost,
  FETCH_POSTS,
  fetchPosts,
  UPDATE_SEARCH_TERM,
  updateSearchTerm
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

describe('updateSearchTerm action', () => {
  it('creates an action to update the search term', () => {
    expect(updateSearchTerm('banana')).toEqual({
      type: UPDATE_SEARCH_TERM,
      payload: 'banana'
    });
  });
});
