import reducer from './comments';
import { UPDATE_COMMENTS } from '../actions/comments';
import { fakeComments } from '../fixtures/fakeComments';

const initialState = {
  loading: false,
  comments: fakeComments
};

describe('comments reducer', () => {
  it('handles UPDATE_COMMENTS action', () => {
    const updatedState = reducer(initialState, { type: UPDATE_COMMENTS, payload: fakeComments });
    expect(updatedState).toEqual({ loading: false, comments: fakeComments });
  });
});
