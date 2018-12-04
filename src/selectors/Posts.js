export const getPosts = state => state.posts.list;

export const getPost = (state, id) => state.posts.list
  .find(post => post.id === id);

export const getLongestPosts = state => state.posts.list
  .sort((a, b) => b.body.length - a.body.length)
  .slice(0, 5);