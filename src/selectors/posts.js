export const getPosts = store => store.posts.list;

export const getLongPosts = store => getPosts(store)
  .sort(function(a, b) {
    return b.body.length - a.body.length;
  })
  .slice(0, 5);

export const getPostsForUser = (store, userId) => getPosts(store)
  .filter(post => post.userId === userId);

export const getSearchTerm = store => store.posts.searchTerm;

export const getFilteredPosts = (store) => {
  const searchTerm = getSearchTerm(store).toUpperCase();
  return getPosts(store)
    .filter(post => post.title.toUpperCase().includes(searchTerm));
};
