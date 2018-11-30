import Home from '../containers/home/Home';
import AllUsers from '../containers/users/AllUsers';
import RegisterUser from '../containers/users/RegisterUser';
import FilterPosts from '../containers/posts/FilterPosts';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  ALL_USERS: {
    path: '/users',
    Component: AllUsers,
    linkTo: () => '/users'
  },
  REGISTER_USER: {
    path: '/users/register',
    Component: RegisterUser,
    linkTo: () => '/users/register'
  },
  FILTER_POSTS: {
    path: '/posts/filter',
    Component: FilterPosts,
    linkTo: () => '/posts/filter' //should this be more like title => `/posts/${title}`
  }
};
