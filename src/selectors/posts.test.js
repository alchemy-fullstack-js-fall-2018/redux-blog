import {
  getPosts,
  getLongestPosts,
  getFilteredPosts,
  getPostsForUser,
  loadingStatus
} from './posts';
import mockPostsJson from '../services/fixtures/posts.json';

describe('posts', () => {
  const state = {
    posts: {
      searchTerm: 'a title',
      list: mockPostsJson,
      loading: false
    }
  };
  it('gets a list of posts from state', () => {
    expect(getPosts(state)).toEqual(mockPostsJson);
  });

  it('gets the top five longest posts to display on home page', () => {
    expect(getLongestPosts(state)).toHaveLength(5);
  });

  it('gets filtered posts from state by searchTerm', () => {
    state.posts.searchTerm = mockPostsJson[0].title.substring(0, mockPostsJson[0].length);
    expect(getFilteredPosts(state)).toContainEqual(mockPostsJson[0]);
  });

  it('gets posts for a user by their id', () => {
    const id = 1;
    const userPosts = getPostsForUser(state, id);
    userPosts.forEach(post => {
      expect(post.userId).toEqual(id);
    });
  });

  it('gets loading state', () => {
    expect(loadingStatus(state)).toEqual(false);
  });
});
