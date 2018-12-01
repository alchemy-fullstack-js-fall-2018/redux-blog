import {
  fetchComments, FETCH_COMMENTS,
  COMMENTS_LOAD_START, COMMENTS_LOAD_END
} from './comments';

jest.mock('../services/blogService');

describe('fetchComments', () => {
  it('payload of action is a promise', () => {
    const action = fetchComments();
    expect(action.payload.then).toBeInstanceOf(Function);
  });

  it('has a type fetch comments, a load start and load end property', () => {
    const action = fetchComments();
    expect(action.type).toEqual(FETCH_COMMENTS);
    expect(action.loadStart).toEqual(COMMENTS_LOAD_START);
    expect(action.loadEnd).toEqual(COMMENTS_LOAD_END);
  });
});
