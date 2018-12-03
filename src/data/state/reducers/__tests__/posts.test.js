import reducer from '../posts';
import { FETCH_POSTS, POSTS_LOAD_START, POSTS_LOAD_END, POSTS_UPDATE_QUERY } from '../../actions/posts';
import mockPostsJson from '../../../../testing/fixtures/posts.json';
import { mockPosts } from '../../../../testing/fixtures/posts';

describe('post reducer', () => {

  const state = {
    list: mockPostsJson,
    query: 'asdf',
    loading: true
  };

  test('handles FETCH_POSTS action', () => {
    const newState = reducer(state, {
      type: FETCH_POSTS,
      payload: mockPosts
    });
    expect(newState.list[0]).toEqual(mockPosts[0]);
    expect(newState.list.length).toEqual(mockPosts.length);
  });

  test('handles POSTS_LOAD_START action', () => {
    const newState = reducer(state, { type: POSTS_LOAD_START });
    expect(newState.loading).toBe(true);
  });

  test('handles POSTS_LOAD_END action', () => {
    const newState = reducer(state, { type: POSTS_LOAD_END });
    expect(newState.loading).toBe(false);
  });

  test('handles POSTS_UPDATE_QUERY action', () => {
    const query = 'xyz';
    const newState = reducer(state, {
      type: POSTS_UPDATE_QUERY,
      payload: query
    });
    expect(newState.query).toEqual(query);
  });

  test('ignore invalid actions', () => {
    const newState = reducer(state, {
      type: 'MADE_UP_TYPE',
      payload: 'asdf'
    });
    expect(newState).toEqual(state);
  });
});
