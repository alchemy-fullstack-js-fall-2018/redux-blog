import reducer from '../comments';
import { FETCH_COMMENTS, COMMENTS_LOAD_START, COMMENTS_LOAD_END } from '../../actions/comments';
import mockCommentsJson from '../../../../testing/fixtures/comments.json';
import { mockComments } from '../../../../testing/fixtures/comments';

describe('user reducer', () => {

  const state = {
    list: mockCommentsJson,
    loading: true
  };

  test('handles FETCH_COMMENTS action', () => {

    const newState = reducer(state, {
      type: FETCH_COMMENTS,
      payload: mockComments
    });

    expect(newState.list[0]).toEqual(mockComments[0]);
    expect(newState.list.length).toEqual(mockComments.length);
  });

  test('handles COMMENTS_LOAD_START action', () => {

    const newState = reducer(state, {
      type: COMMENTS_LOAD_START
    });

    expect(newState.loading).toBe(true);
  });

  test('handles COMMENTS_LOAD_END action', () => {
    const newState = reducer(state, {
      type: COMMENTS_LOAD_END
    });

    expect(newState.loading).toBe(false);
  });

  it('ignore invalid actions', () => {

    const newState = reducer(state, {
      type: 'MADE_UP_TYPE',
      payload: 'asdf'
    });

    expect(newState).toEqual(state);
  });
});
