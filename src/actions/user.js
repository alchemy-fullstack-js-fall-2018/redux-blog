import { getUsers } from '../services/blogService';


export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = ( name, username, email, address, phone ) => {
  return {
    type: FETCH_USERS,
    payload: {
      name,
      username,
      email,
      address,
      phone
    }
  };
};
