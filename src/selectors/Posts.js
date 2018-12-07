export const getPosts = state => state.posts.postList;

export const isLoading = state => state.posts.loading;

export const getLongestPosts = state => state.getPosts(store)
  .sort(function(a, b) {
    return b.body.length - a.body.length;
  })
  .slice(0, 5);

export const getPostsForUser = ( store, userId ) => getPosts(store).filter(post => post.userId === userId);

export const getFilteredPosts = state => {
  const filterPosts = getPostBySearch(state);
  return getPosts(state).filter(post => {
    return posts.title.includes(searchTerm);
  });
}

export const getPostBySearch = state => {
  return state.posts.searchTerm;
}
