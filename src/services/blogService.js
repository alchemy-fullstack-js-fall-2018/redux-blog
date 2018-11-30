import queryString from 'querystring';

export const getComments = ( postId ) => {
  const queryStr = queryString.stringify({ postId });
  return fetch(`https://jsonplaceholder.typicode.com/${postId}/`, {
  // headers: { origin: null }
  })
    .then(res => res.json())
};

// console.log(getComments);
// export const getAbilities = () => {
//   return fetch(`https://cors-anywhere.herokuapp.com/http://pokeapi.co/api/v2/ability/`)
//     .then(res => res.json())
//     .then(json => json.results.map(ability => ability.name))
// };
