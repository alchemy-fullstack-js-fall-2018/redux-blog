export const getPosts = state => state.posts.postList;

export const getPostsForUser = ( store, userId ) => getPosts(store).filter(post => post.userId === userId);

export const getFilteredPosts = state => {
  const searchTerm = getPostBySearch(state);
  return getPosts(state).filter(post => {
    return posts.title.includes(searchTerm);
  });
}

export const getPostBySearch = state => {
  return state.posts.searchTerm;
}

export const isLoading = state => state.posts.loading;

export const getLongestPosts = state => state.posts.postList
    .sort((a, b) => b.body.length - a.body.length)
    .slice(0, 5);
