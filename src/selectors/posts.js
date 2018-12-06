export const getPosts = state => state.posts.list;

export const getPost = state => state.posts.post;

export const getSearchTerm = state => {
  return state.posts.searchTerm;
};

export const getFilteredPosts = state => {
  return getPosts(state).filter(post =>
    post.title.includes(getSearchTerm(state))
  );
};

export const getLongestPosts = state => {
  console.log('state', state);
  return getPosts(state)
    .sort((a, b) => {
      b.body.length - a.body.length;
    })
    .slice(0, 5);
};
