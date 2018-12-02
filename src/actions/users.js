import { fetchUsersApi } from '../services/usersApi';

export const FETCH_USERS = 'FETCH_USERS';
export const fetchUsers = () => ({
  type: FETCH_USERS,
  payload: fetchUsersApi()
});
