import { get } from '../lib/request';

const API_URL = 'https://jsonplaceholder.typicode.com';

export const getUsers = () => {
  return get(`${API_URL}/users`)
    .then(users => ([...users]));
};

export const getPosts = () => {
  return get(`${API_URL}/posts`)
    .then(posts => ([...posts]));
};

export const getComments = id => {
  return get(`${API_URL}/comments?postId=${id}`)
    .then(comments => ([...comments]));
};
