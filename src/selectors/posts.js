export const getLongestPosts = ({ posts }) => {
  posts.sort((a, b) => {
    return (b.body.length - a.body.length);
  });
  return posts.slice(0, 5);
};
