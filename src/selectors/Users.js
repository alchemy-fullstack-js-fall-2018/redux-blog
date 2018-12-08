export const getUsers = state => state.users.list;

export const getUser = (state, id) => state.users.list
  .find(user => user.id === id);

export const isLoading = state => state.users.loading;
