export const get = url => {
  return fetch(url)
    .then(res => {
      console.log(res.json());
      res.json();
    });
};
