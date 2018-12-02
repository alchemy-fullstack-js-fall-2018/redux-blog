import {
  fetchPosts,
  FETCH_POSTS,
  POSTS_LOAD_START,
  POSTS_LOAD_END,
  UPDATE_POSTS_SEARCH_TERM,
  updatePostsSearchTerm,
} from './posts';

jest.mock('../services/blogService');

describe('posts', () => {
  it('payload of FETCH_POSTS is a promise', () => {
    const action = fetchPosts();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  it('has a type fetch posts, a load start and load end property', () => {
    const action = fetchPosts();
    expect(action.type).toEqual(FETCH_POSTS);
    expect(action.loadStart).toEqual(POSTS_LOAD_START);
    expect(action.loadEnd).toEqual(POSTS_LOAD_END);
  });

  it('recieves a updatedSearchTerm as a a string', () => {
    const action = updatePostsSearchTerm('a search term');
    expect(typeof action.payload).toEqual('string');
    expect(action.type).toEqual(UPDATE_POSTS_SEARCH_TERM);
  });
});
