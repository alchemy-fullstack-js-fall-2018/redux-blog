export const getPosts = state => state.posts.list;

export const getPost = state => state.posts.post;

export const getSearchTerm = state => {
  return state.posts.searchTerm;
};

export const getFilteredPosts = state => {
  return getPosts(state).filter(post => post.title.includes(getSearchTerm(state)));
};

