const posts = [
  {
    userId: 1,
    id: 1,
    title: 'a title',
    body: 'a body'
  },
  {
    userId: 1,
    id: 2,
    title: 'a title',
    body: 'a body'
  },
  {
    userId: 1,
    id: 3,
    title: 'a title',
    body: 'a body'
  },
  {
    userId: 2,
    id: 4,
    title: 'a title',
    body: 'a body'
  },
];

const users = [
  { id: 1,
    name: 'Leanne Graham',
    username: 'Bret',
    email: 'Sincere@april.biz'
  },
  { id: 2,
    name: 'Ervin Howell',
    username: 'Antonette',
    email: 'Sincere@april.biz'
  }
];

export const getPosts = () => {
  return Promise.resolve(posts);
};

export const getUsers = () => {
  return Promise.resolve(users);
};


