const users = [
  {
    id: 1,
    name: 'jonny fake-o',
    username: 'fakerton',
    email: 'fake@fake.com',
    address: {},
    phone: '1800-fake-number',
    website: 'www.fakesite.com',
    company: {
      name: 'fake-o fakey fake',
      catchPhrase: 'we do stuff!',
      bs: 'this is bs'
    }
  },
  {
    id: 2,
    name: 'fakesworth mcgee',
    username: 'fakesley',
    email: 'fake2@fake.com',
    address: {},
    phone: '1800-fake-number',
    website: 'www.fakesite.com',
    company: {
      name: 'fake-o fakey fake',
      catchPhrase: 'we do stuff!',
      bs: 'this is bs'
    }
  },
  {
    id: 3,
    name: 'fakleton fakingly',
    username: 'fakeyoutoo',
    email: 'fake3@fake.com',
    address: {},
    phone: '1800-fake-number',
    website: 'www.fakesite.com',
    company: {
      name: 'fake-o fakey fake',
      catchPhrase: 'we do stuff!',
      bs: 'this is bs'
    }
  }
];

const posts = [
  {
    userId: 1,
    id: 1,
    title: 'mockTitle',
    body: 'jesse the body ventura'
  },
  {
    userId: 1,
    id: 2,
    title: 'mockTitle2',
    body: 'jesse the body ventura'
  },
  {
    userId: 1,
    id: 3,
    title: 'mockTitle3',
    body: 'jesse the body ojai'
  },
  {
    userId: 1,
    id: 4,
    title: 'mockTitle3',
    body: 'jesse the body oxnard'
  },
  {
    userId: 1,
    id: 4,
    title: 'mockTitle4',
    body: 'jesse the body carpinteria'
  },
];

export const getUsers = () => {
  return Promise.resolve(users);
};

export const getPosts = () => {
  return Promise.resolve(posts);
};
