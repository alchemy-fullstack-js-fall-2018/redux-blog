export const getPost = (state, id) => state.posts.list
  .filter(post => post.id === id)[0];

export const getPosts = state =>  state.posts.list;

export const getLongestPosts = state => state.posts.list
  .sort((a, b) => b.body.length - a.body.length)
  .slice(0, 5);

export const getFilteredPosts = state => state.posts.list
  .filter(post => post.title.includes(state.posts.query));

export const getPostsForUser = (state, id) => state.posts.list
  .filter(post => post.userId === id);
