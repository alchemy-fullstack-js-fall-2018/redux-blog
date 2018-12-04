import { fetchPostsApi } from './postsApi';
import mockPostsJson from './fixtures/mockPostsJson.json';

jest.mock('./request.js', () => ({
  get: url => {
    if(url === 'https://jsonplaceholder.typicode.com/posts') {
      return Promise.resolve(mockPostsJson);
    } else {
      return Promise.reject('404');
    }
  }
}));

describe('post api service', () => {
  it('gets list of posts from api', () => {
    return fetchPostsApi()
      .then(results => {
        expect(results.length).toEqual(3);
      });
  });
});
