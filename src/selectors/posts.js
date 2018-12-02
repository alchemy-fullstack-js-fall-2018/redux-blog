export const getPosts = store => store.posts;

export const getLongPosts = store => store.posts
  .sort(function(a, b) {
    return b.body.length - a.body.length;
  })
  .slice(0, 5);
