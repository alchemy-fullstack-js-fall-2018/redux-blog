import { get } from './request';

export const getPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
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

export const getLongestPosts = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then((posts) => {
      posts.sort((a, b) => {
        if(a.body.length < b.body.length) return 1;
        if(b.body.length < a.body.length) return -1;
        return 0;
      });
      return {
        longestPosts: posts.slice(0, 5)
      };
    });
};
