import { getUsers } from '../../services/blogApi';

export const USERS_LOAD_START = 'USERS_LOAD_START';
export const USERS_LOAD_END = 'USERS_LOAD_END';
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: USERS_LOAD_START,
  loadEnd: USERS_LOAD_END,
  payload: getUsers()
});

export const REGISTER_USER = 'REGISTER_USER';
export const registerUser = user => ({
  type: REGISTER_USER,
  payload: user
});
