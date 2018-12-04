import { getUsers as getUsersPromise } from '../services/blogService';

export const LOAD_USERS_START = 'LOAD_USERS_START';
export const LOAD_USERS_END = 'LOAD_USERS_END';
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: LOAD_USERS_START,
  loadEnd: LOAD_USERS_END,
  payload: getUsersPromise()
});
