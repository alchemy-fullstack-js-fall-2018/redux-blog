import reducer from './posts';
import {
  FETCH_POSTS,
  UPDATE_POSTS_SEARCH_TERM,
  POSTS_LOAD_START,
  POSTS_LOAD_END
} from '../actions/posts';

describe('posts', () => {
  const state = {
    searchTerm: '',
    list: [
      {
        userId: 1,
        id: 1,
        title: 'a title',
        body: 'a body'
      },
      {
        userId: 1,
        id: 2,
        title: 'another title',
        body: 'another body'
      }
    ],
    loading: true
  };
  it('handles FETCH_POSTS action', () => {
    const newState = reducer(state, {
      type: FETCH_POSTS,
      payload: [{ userId: 1, id: 3, title: 'third title', body: 'third body' }]
    });

    expect(newState.list).toEqual([{ userId: 1, id: 3, title: 'third title', body: 'third body' }]);
  });

  it('handles UPDATE_POST_SEARCH_TERM', () => {
    const newState = reducer(state, {
      type: UPDATE_POSTS_SEARCH_TERM,
      payload: 'a stupid search term'
    });

    expect(newState.searchTerm).toEqual('a stupid search term');
  });

  it('handles POSTS_LOAD_START', () => {
    const newState = reducer(state, {
      type: POSTS_LOAD_START,
      payload: true
    });

    expect(newState.loading).toBe(true);
  });

  it('handles POSTS_LOAD_END', () => {
    const newState = reducer(state, {
      type: POSTS_LOAD_END,
      payload: false
    });

    expect(newState.loading).toBe(false);
  });
});


