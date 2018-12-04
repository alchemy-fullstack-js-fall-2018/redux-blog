import { getComments } from './comments';
import mockCommentsJson from '../services/fixtures/comments.json';


describe('comments', () => {
  const state = {
    comments: {
      list: mockCommentsJson,
      loading: false
    }
  };
  it('gets a list of comments from state', () => {
    expect(getComments(state)).toEqual(mockCommentsJson);
  });
});
