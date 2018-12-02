import HomeContainer from '../containers/HomeContainer';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: HomeContainer,
    linkTo: () => '/'
  }
};
