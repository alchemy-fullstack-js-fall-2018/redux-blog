
export const POSTS_URL = 'https://jsonplaceholder.typicode.com/posts';
export const getPosts = () => {
  return fetch(POSTS_URL)
    .then(res => res.json());
};

export const USERS_URL = 'https://jsonplaceholder.typicode.com/users';
export const getUsers = () => {
  return fetch(USERS_URL)
    .then(res => res.json())
    .then(result => {
      const users = {};
      result.forEach(user => {
        users[user.id] = {
          name: user.name,
          email: user.email,
          posts: []
        };
      });
      return users;
    }
    );
};

export const getComments = id => {
  return fetch(`https://jsonplaceholder.typicode.com/comments?postId=${id}`)
    .then(res => res.json());
};
