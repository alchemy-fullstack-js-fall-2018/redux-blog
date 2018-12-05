import Home from '../components/home/Home';
import PostDetail from '../containers/posts/PostDetail';
import UserDetail from '../containers/users/UserDetail';
import Users from '../containers/users/Users';
import Posts from '../containers/posts/Posts';

export default {
  HOME: {
    path: '/',
    component: Home,
    linkTo: () => '/'
  },
  POSTS: {
    path: '/posts',
    component: Posts,
    linkTo: () => '/posts'
  },
  POST_DETAIL: {
    path: '/posts/:id',
    component: PostDetail,
    linkTo: id => `/posts/${id}`
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
