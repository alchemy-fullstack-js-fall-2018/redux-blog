import reducer from './comments';
import {
  FETCH_COMMENTS,
  COMMENTS_LOAD_END,
  COMMENTS_LOAD_START
} from '../actions/comments';

describe('comments reducer tests', () => {

  const state = {
    isLoading: false,
    list: [
      {
        'postId': 1,
        'id': 1,
        'name': 'id labore ex et quam laborum',
        'email': 'Eliseo@gardner.biz',
        'body': 'laudantium enim quasi est quidem magnam voluptate ipsam eos\ntempora quo necessitatibus\ndolor quam autem quasi\nreiciendis et nam sapiente accusantium'
      },
      {
        'postId': 1,
        'id': 2,
        'name': 'quo vero reiciendis velit similique earum',
        'email': 'Jayne_Kuhic@sydney.com',
        'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      }
    ]
  };

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles FETCH_COMMENTS action', () => {
    const replacement = [
      {
        'postId': 1,
        'id': 2,
        'name': 'quo vero reiciendis velit similique earum',
        'email': 'Jayne_Kuhic@sydney.com',
        'body': 'est natus enim nihil est dolore omnis voluptatem numquam\net omnis occaecati quod ullam at\nvoluptatem error expedita pariatur\nnihil sint nostrum voluptatem reiciendis et'
      }
    ];
    const resultState = { ...state };
    resultState.list = replacement;
    const newState = reducer (state, { type: FETCH_COMMENTS, payload: replacement });
    expect(newState).toEqual(resultState);
  });

  it('handles COMMENTS_LOAD_START/COMMENTS_LOAD_END actions', () => {
    let newState = reducer (state, { type: COMMENTS_LOAD_START });
    expect(newState.isLoading).toEqual(true);
    newState = reducer (state, { type: COMMENTS_LOAD_END });
    expect(newState.isLoading).toEqual(false);
  });

});
