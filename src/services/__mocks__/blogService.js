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

export const getUsers = () => {
  return Promise.resolve(users);
};
