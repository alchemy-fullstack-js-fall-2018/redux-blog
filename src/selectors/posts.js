export const getLongestPosts = ({ posts }) => {
  posts.posts.sort((a, b) => {
    return (b.body.length - a.body.length);
  });
  return posts.posts.slice(0, 5);
};
