import { get } from './request';

export const fetchUsersApi = () => {
  return get('https://jsonplaceholder.typicode.com/users')
    .then(result => {
      return result;
    });
};
