import { get } from './request';

export const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
export const getPosts = () => {
  return get(POSTS_URL)
    .then((posts) => {
      return {
        posts: posts.map(post => ({
          id: post.id,
          user: post.userId,
          title: post.title,
          body: post.body
        }))
      };
    });
};
