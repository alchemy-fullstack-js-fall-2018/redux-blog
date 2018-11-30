import queryString from 'querystring';

export const getComments = ( postId ) => {
  const queryStr = queryString.stringify({ postId });
  return fetch(`https://jsonplaceholder.typicode.com/Comments/${postId}/`, {
  // headers: { origin: null }
  })
    .then(res => res.json())
};

console.log(getComments);

export const getUsers = () => {
  return fetch(`https://jsonplaceholder.typicode.com/Users`)
    .then(res => res.json())
};

export const getPosts = () => {
  return fetch(`https://jsonplaceholder.typicode.com/Posts`)
    .then(res => res.json())
};
