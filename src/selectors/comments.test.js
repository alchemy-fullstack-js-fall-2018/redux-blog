import {
  getComments,
  isLoading
} from './comments';

describe('comments selector tests', () => {

  const state = {
    comments: {
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
    }
  };

  it('gets comments', () => {
    const result = getComments(state);
    expect(result).toEqual(state.comments.list);
  });

  it('gets loading status', () => {
    const result = isLoading(state);
    expect(result).toEqual(state.comments.isLoading);
  });

});
