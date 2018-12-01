import mockPosts from './fixtures/posts';
import { getPosts } from './blogApi';


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
});
