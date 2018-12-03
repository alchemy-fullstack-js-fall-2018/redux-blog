import HomeContainer from '../containers/HomeContainer';
import AllUsers from '../containers/AllUsers';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: HomeContainer,
    linkTo: () => '/'
  },
  USERS: {
    path: '/users',
    Component: AllUsers,
    linkTo: () => '/users'
  }
};
