import mockPosts from './fixtures/posts';
import { getPosts, getLongestPosts } from './blogApi';


jest.mock('./request.js', () => ({
  get: url => {
    if(url.startsWith('https://jsonplaceholder.typicode.com/posts')) {
      return Promise.resolve(mockPosts);
    }
  }
}));

describe('blogApi', () => {
  describe('getPosts', () => {
    it('gets a list of blog posts in proper format', () => {
      return getPosts()
        .then(result => {
          expect(result.posts[0].body).toBeTruthy();
          expect(result.posts[0].id).toBeTruthy();
          expect(result.posts[0].user).toBeTruthy();
          expect(result.posts[0].title).toBeTruthy();
        });
    });
  });

  describe('getLongestPosts', () => {
    it('gets the five longest posts sorted in order of longest to shortest', () => {
      return getLongestPosts()
        .then(result => {
          expect(result.longestPosts).toHaveLength(5);
          expect(result.longestPosts[0].body.length).toBeGreaterThanOrEqual(result.longestPosts[1].body.length);
          expect(result.longestPosts[3].body.length).toBeGreaterThanOrEqual(result.longestPosts[4].body.length);
        });
    });
  });
});
