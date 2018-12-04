import { fetchCommentsApi } from './commentsApi';
import mockCommentsJson from './fixtures/mockCommentsJson.json';

jest.mock('./request.js', () => ({
  get: url => {
    if(url === 'https://jsonplaceholder.typicode.com/comments?postId=1') {
      return Promise.resolve(mockCommentsJson);
    } else {
      return Promise.reject('404');
    }
  }
}));

describe('comments api service', () => {
  it('gets list of comments from api', () => {
    return fetchCommentsApi(1)
      .then(results => {
        expect(results.length).toEqual(3);
      });
  });
});
