import reducer from './comments';
import { FETCH_COMMENTS, COMMENTS_LOAD_START, COMMENTS_LOAD_END } from '../actions/comments';

describe('comments', () => {
  const state = {
    list: [
      {
        postID: 1,
        id: 1,
        name: 'a name',
        email: '1234@email.com',
        body: 'some text goes in here'
      },
      {
        postId: 1,
        id: 2,
        name: 'another name',
        email: '5421@email.com',
        body: 'some more text goes here as well'
      }
    ],
    loading: true
  };

  it('handles FETCH_COMMENTS action', () => {
    const newState = reducer(state, {
      type: FETCH_COMMENTS,
      payload: [{ postId: 2, id: 3, name: 'yet another name', email: '4567@email.com', body: 'hahahahaa' }]
    });

    expect(newState.list).toEqual([{ postId: 2, id: 3, name: 'yet another name', email: '4567@email.com', body: 'hahahahaa' }]);
  });

  it('handles a COMMENTS_LOAD_START', () => {
    const newState = reducer(state, {
      type: COMMENTS_LOAD_START,
      payload: true
    });

    expect(newState.loading).toBe(true);
  });
  it('handles a COMMENTS_LOAD_END', () => {
    const newState = reducer(state, {
      type: COMMENTS_LOAD_END,
      payload: true
    });

    expect(newState.loading).toBe(false);
  });
});
