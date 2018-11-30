import { get } from '../lib/request';

export const getUsers = () => {
  return get('https://jsonplaceholder.typicode.com/posts')
    .then((users) => ({ users: users }));
};



export const getUser = (id) => {
  return get(`https://jsonplaceholder.typicode.com/posts/${id}`)
    .then(({ count, artists }) => {
      return {
        pages: Math.ceil(count / PAGE_SIZE),
        artists: artists.map(artist => ({
          name: artist.name,
          description: artist.disambiguation || '',
          id: artist.id
        }))
      };
    });
};
