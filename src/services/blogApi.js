
export const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
export const getPosts = () => {
  return fetch(POSTS_URL)
    .then(res => res.json());
};
