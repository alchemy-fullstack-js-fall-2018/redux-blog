import Home from './components/home/Home';
import UserDetail from './components/userDetails/UserDetails';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  },
  USER_DETAIL: {
    path: '/users/:id',
    Component: UserDetail,
    linkTo: id => `/users/${id}`
  }
};
