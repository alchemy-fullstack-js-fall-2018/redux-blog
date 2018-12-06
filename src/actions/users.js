import { getUsers, getUser } from '../services/jsonPlaceholderApi';

export const FETCH_USERS_LOADING = 'FETCH_USERS_START';
export const FETCH_USERS_DONE = 'FETCH_USERS_DONE';
export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: FETCH_USERS_LOADING,
  loadEnd: FETCH_USERS_DONE,
  payload: getUsers()
});

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = id => ({
  type: FETCH_USER,
  payload: getUser(id)
});
