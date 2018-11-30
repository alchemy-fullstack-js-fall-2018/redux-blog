import { get } from './request';

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
      return result;
    });
};
