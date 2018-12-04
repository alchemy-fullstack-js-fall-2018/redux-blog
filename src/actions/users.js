import { fetchUsersApi, fetchUserApi } from '../services/usersApi';

export const USERS_LOAD_START = 'USERS_LOAD_START';
export const USERS_LOAD_END = 'USERS_LOAD_END';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  loadStart: USERS_LOAD_START,
  loadEnd: USERS_LOAD_END,
  payload: fetchUsersApi()
});

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = id => ({
  type: FETCH_USER,
  loadStart: USERS_LOAD_START,
  loadEnd: USERS_LOAD_END,
  payload: fetchUserApi(id)
});
