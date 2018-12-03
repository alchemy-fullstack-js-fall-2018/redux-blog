import Home from './components/home/Home';
import FilteredPosts from './containers/FilteredPosts';
import PostDetail from './containers/PostDetail';
import AllUsers from './containers/AllUsers';
export const ROUTES = {
  HOME: {
    path: '/home',
    Component: Home,
    linkTo: () => '/home'
  },
  POST_SEARCH: {
    path: '/posts/search',
    Component: FilteredPosts,
    linkTo: () => 'posts/search'
  },
  POST_DETAIL: {
    path: '/posts/:id',
    Component: PostDetail,
    linkTo: id => `/posts/${id}`
  },
  USERS: {
    path: '/users',
    Component: AllUsers,
    linkTo: () => '/users'
  },
  // USER_DETAIL: {
  //   path: '/users/:id',
  //   Component: UserDetail,
  //   linkTo: id => `users/${id}`
  // }
};
