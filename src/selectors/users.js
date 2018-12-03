import { getPosts } from '../services/blogApi';

export const getUsers = ({ users }) => {

  const allUsers = users.users;
  if(Object.keys(allUsers).length > 0) {
    getPosts()
      .then(posts => {
        posts.forEach(post => {
          allUsers[post.userId].posts.push(post);
        });
      });

    return Object.keys(allUsers).map(user => ({
      user,
      name: allUsers[user].name,
      posts: allUsers[user].posts,
      email: allUsers[user].email
    }));
  }
  return [allUsers];


  // const allUsers = users.users;

  // return Object.keys(allUsers).map(user => ({
  //   user,
  //   name: allUsers[user].name,
  //   posts: allUsers[user].posts,
  //   email: allUsers[user].email
  // }));


};
