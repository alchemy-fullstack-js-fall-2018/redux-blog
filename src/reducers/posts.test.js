import reducer from './posts';
import { UPDATE_POSTS } from '../actions/posts';
import { fakePosts } from '../fixtures/fakePosts';

const initialState = {
  searchTerm: '',
  posts: [{ id: 1,
    user: 1,
    title: 'sunt aut facere repellat provident occaecatiexcepturi optio reprehenderit',
    body: 'quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto' },
  { id: 2,
    user: 1,
    title: 'qui est esse',
    body: 'est rerum tempore vitae\nsequi sint nihil reprehenderit dolor beatae ea dolores neque\nfugiat blanditiis voluptate porro vel nihil molestiae ut reiciendis\nqui aperiam non debitis possimus qui neque nisi nulla' },
  { id: 3,
    user: 1,
    title: 'ea molestias quasi exercitationem repellat qui ipsa sit aut',
    body: 'et iusto sed quo iure\nvoluptatem occaecati omnis eligendi aut ad\nvoluptatem doloribus vel accusantium quis pariatur\nmolestiae porro eius odio et labore et velit aut' },
  { id: 4,
    user: 1,
    title: 'eum et est occaecati',
    body: 'ullam et saepe reiciendis voluptatem adipisci\nsit amet autem assumenda provident rerum culpa\nquis hic commodinesciunt rem tenetur doloremque ipsam iure\nquis sunt voluptatem rerum illo velit' },
  { id: 5,
    user: 1,
    title: 'nesciunt quas odio',
    body: 'repudiandae veniam quaerat sunt sed\nalias aut fugiat sit autem sed est\nvoluptatem omnis possimus esse voluptatibus quis\nest aut tenetur dolor neque' }
]
};

describe('posts reducer', () => {
  it('handles UPDATE_POSTS action', () => {
    const updatedState = reducer(initialState, { type: UPDATE_POSTS, payload: fakePosts });
    expect(updatedState).toEqual({ searchTerm: '', posts: fakePosts });
  });
});
