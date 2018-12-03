const users = [
  {
    'id': 1,
    'name': 'Leanne Graham',
    'username': 'Bret',
    'email': 'Sincere@april.biz'
  },
  {
    'id': 2,
    'name': 'Ervin Howell',
    'username': 'Antonette',
    'email': 'Shanna@melissa.tv'
  }
];

export const fetchUsersApi = () => {
  return Promise.resolve(Object.values(users));
};

export const fetchUserApi = (id) => {
  return Promise.resolve(Object.values(users[id]));
};
