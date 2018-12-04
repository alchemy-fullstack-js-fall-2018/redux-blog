import reducer from './posts';
import {
  FETCH_POSTS,
  POSTS_LOAD_START,
  POSTS_LOAD_END
} from '../actions/posts';

describe('posts reducer tests', () => {

  const state = {
    isLoading: false,
    list: [
      {
        'userId': 1,
        'id': 1,
        'title': 'sunt aut facere repellat provident occaecati excepturi optio reprehenderit',
        'body': 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto'
      },
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }
    ]
  };

  it('returns initial state', () => {
    const newState = reducer(state, {});
    expect(newState).toEqual(state);
  });

  it('handles FETCH_POSTS action', () => {
    const replacement = [
      {
        'userId': 1,
        'id': 2,
        'title': 'qui est esse',
        'body': 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla'
      }
    ];
    const resultState = { ...state };
    resultState.list = replacement;
    const newState = reducer (state, { type: FETCH_POSTS, payload: replacement });
    expect(newState).toEqual(resultState);
  });

  it('handles POSTS_LOAD_START/POSTS_LOAD_END actions', () => {
    let newState = reducer (state, { type: POSTS_LOAD_START });
    expect(newState.isLoading).toEqual(true);
    newState = reducer (state, { type: POSTS_LOAD_END });
    expect(newState.isLoading).toEqual(false);
  });

});
