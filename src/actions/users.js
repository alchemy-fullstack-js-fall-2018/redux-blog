// FETCH_USERS
// LOAD_USERS_START
// LOAD_USERS_END
import { getUsers as getUsersPromise } from '../services/blogService';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: getUsersPromise()
});
