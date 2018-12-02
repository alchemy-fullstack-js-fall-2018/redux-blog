import { fetchUsersApi, fetchUserApi } from '../services/usersApi';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: fetchUsersApi()
});

export const FETCH_USER = 'FETCH_USER';
export const fetchUser = id => ({
  type: FETCH_USER,
  payload: fetchUserApi(id)
});
