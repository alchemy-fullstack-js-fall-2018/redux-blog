export const getPosts = state => state.posts.list;

export const getFilteredPosts = state => state.posts.list
  .filter(post => post.title.includes(state.posts.searchTerm));

export const getPostsForUser = (state, id) => state.posts.list
  .filter(post => post.userId === id);

export const getLongestPosts = state => state.posts.list
  .sort((a, b) => b.body.length - a.body.length)
  .slice(0, 5);

export const loadingStatus = state => state.posts.loading;
