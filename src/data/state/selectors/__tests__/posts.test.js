import { getPosts, getLongestPosts, getFilteredPosts, getPostsForUser } from '../posts';
import mockPosts from '../../../../testing/fixtures/posts.json';

describe('post selector', () => {
  const state = {
    posts: {
      list: mockPosts,
      query: 'asdf',
      loading: false
    }
  };

  test('gets post list from state', () => {
    expect(getPosts(state)).toEqual(mockPosts);
  });

  test('gets top 10 posts by length', () => {
    const longestPosts = getLongestPosts(state);
    expect(longestPosts).toHaveLength(10);
    longestPosts.forEach((post, index, posts) => {
      if(posts[index + 1]) {
        expect(post.body.length).toBeGreaterThanOrEqual(posts[index + 1].body.length);
      }
    });
    longestPosts.every(longestPost => {
      mockPosts.every(mockPost => {
        expect(longestPost.body.length).toBeGreaterThanOrEqual(mockPost.body.length);
      });
    });
  });

  test('gets filtered posts from query', () => {
    const soughtTitle = mockPosts[0].title;
    state.posts.query = soughtTitle.substring(0, soughtTitle.length);
    expect(getFilteredPosts(state)).toContainEqual(mockPosts[0]);
    expect(getFilteredPosts(state).length).toBeLessThan(mockPosts.length);
  });

  test('gets posts for user', () => {
    const id = 1;
    const userPosts = getPostsForUser(state, id);
    userPosts.forEach(post => {
      expect(post.userId).toEqual(id);
    });
  });



});
