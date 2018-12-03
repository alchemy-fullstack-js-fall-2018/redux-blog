import { getLongestPosts } from './posts';
import { fakePosts } from '../fixtures/fakePosts';

describe('posts selectors', () => {

  describe('getLongestPosts', () => {
    it('gets the five longest posts sorted in order of longest to shortest', () => {

      const state = { posts: fakePosts };
      const longestPosts = getLongestPosts(state);
      expect(longestPosts).toHaveLength(5);
      expect(longestPosts[0].body.length).toBeGreaterThanOrEqual(longestPosts[1].body.length);
      expect(longestPosts[1].body.length).toBeGreaterThanOrEqual(longestPosts[2].body.length);
      expect(longestPosts[2].body.length).toBeGreaterThanOrEqual(longestPosts[3].body.length);
      expect(longestPosts[3].body.length).toBeGreaterThanOrEqual(longestPosts[4].body.length);
    });
  });
});
