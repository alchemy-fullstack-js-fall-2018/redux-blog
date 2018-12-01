import { getComments } from '../comments';
import { mockComments } from '../../../../testing/fixtures/comments';

describe('comment selector', () => {
  const state = {
    comments: {
      list: mockComments,
      loading: false
    }
  };

  test('gets comment list from state', () => {
    expect(getComments(state)).toEqual(mockComments);
  });

});
