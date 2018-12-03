import reducer from './posts';
import { UPDATE_POSTS } from '../actions/posts';
import { fakePosts } from '../fixtures/fakePosts';

const initialState = {
  searchTerm: '',
  posts: fakePosts
};

describe('posts reducer', () => {
  it('handles UPDATE_POSTS action', () => {
    const updatedState = reducer(initialState, { type: UPDATE_POSTS, payload: fakePosts });
    expect(updatedState).toEqual({ searchTerm: '', posts: fakePosts });
  });
});
