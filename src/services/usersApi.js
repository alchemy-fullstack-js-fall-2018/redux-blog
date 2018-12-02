import { get } from './request';

export const fetchUsersApi = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
      return result;
    });
};

export const fetchUserApi = (id) => {
  return get(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(result => {
      return result;
    });
};
