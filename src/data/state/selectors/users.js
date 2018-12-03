export const getUser = (state, id) => state.users.list
  .filter(user => user.id === id)[0];

export const getUsers = state =>  state.users.list;
