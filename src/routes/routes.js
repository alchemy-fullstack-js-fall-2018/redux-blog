import Home from '../components/home/Home';
import PostDetail from '../containers/posts/PostDetail';
import UserDetail from '../containers/users/UserDetail';
import Users from '../containers/users/Users';
import PostsSearch from '../containers/posts/PostsSearch';

export default {
  HOME: {
    path: '/',
    component: Home,
    linkTo: () => '/'
  },
  POST_DETAIL: {
    path: '/posts/:id',
    component: PostDetail,
    linkTo: id => `/posts/${id}`
  },
  POSTS_SEARCH: {
    path: '/posts',
    component: PostsSearch,
    linkTo: () => '/posts'
  },
  USERS: {
    path: '/users',
    component: Users,
    linkTo: () => '/users'
  },
  USER_DETAIL: {
    path: '/users/:id',
    component: UserDetail,
    linkTo: id => `/users/${id}`
  }
};
