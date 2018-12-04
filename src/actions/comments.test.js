import { FETCH_COMMENTS, fetchComments } from './comments';

jest.mock('../services/commentsApi');

describe('comments actions', () => {
  it('has a promise as a payload', () => {
    const id = 5;
    const action = fetchComments(id);
    expect(typeof action.payload).toEqual('object');
    expect(action.type).toEqual(FETCH_COMMENTS);
  });
});
