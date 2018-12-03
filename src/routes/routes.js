import Home from '../containers/home/Home';
import AllUsers from '../containers/users/AllUsers';
import UserDetail from '../containers/users/UserDetail';
import RegisterUser from '../containers/users/RegisterUser';
import FilterPosts from '../containers/posts/FilterPosts';
import PostDetail from '../containers/posts/PostDetail';

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
  USER_DETAIL: {
    path: '/users/:id',
    Component: UserDetail,
    linkTo: id => `posts/${id}`
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
  },
  POST_DETAIL: {
    path: '/posts/:id',
    Component: PostDetail,
    linkTo: id => `posts/${id}`
  }
};
