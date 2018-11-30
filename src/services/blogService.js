export const getComments = (id) => {

  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(comments => {
      return {
        comments: comments.map(comment => ({
          postId: comment.postId,
          id: comment.id,
          name: comment.name,
          email: comment.email,
          body: comment.body
        }))
      };
    });
};

export const getUsers = () => {
  return fetch('https://jsonplaceholder.typicode.com/Users')
    .then(users => {
      return {
        users: users.map(user => ({
          id: user.id,
          name: user.name,
          username: user.username,
          email: user.email
        }))
      };
    });
};

export const getPosts = () => {
  return fetch('https://jsonplaceholder.typicode.com/Posts')
    .then(posts => {
      return {
        posts: posts.map(post => ({
          userId: post.userId,
          id: post.id,
          title: post.title,
          body: post.body
        }))
      };
    });
};
