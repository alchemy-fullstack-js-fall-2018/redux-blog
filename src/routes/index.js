import About from '../components/presentational/about/About.jsx';
import Home from '../components/presentational/home/Home.jsx';
import PostListFilter from '../components/container/posts/PostListFilter.js';
import PostDetailId from '../components/container/posts/PostDetailId.js';
import UserListAll from '../components/container/users/UserListAll';
import UserDetailId from '../components/container/users/UserDetailId';
import UserRegister from '../components/container/users/UserRegister';

export const ROUTES = {
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  },
  HOME: {
    path: '/home/',
    Component: Home,
    linkTo: () => '/home',
  },
  POSTS: {
    path: '/posts/search',
    Component: PostListFilter,
    linkTo: () => '/posts/search'
  },
  POST_DETAIL: {
    path: '/posts/:id',
    Component: PostDetailId,
    linkTo: id => `/posts/${id}`
  },
  USERS: {
    path: '/users',
    Component: UserListAll,
    linkTo: () => '/users'
  },
  USER_DETAIL: {
    path: '/users/:id',
    Component: UserDetailId,
    linkTo: id => `/users/${id}`
  },
  USER_REGISTER: {
    path: '/users/new',
    Component: UserRegister,
    linkTo: () => '/users/new'
  }
};
