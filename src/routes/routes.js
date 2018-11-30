import Header from '../components/header/Header';
import Home from '../components/home/Home';

export const ROUTES = {
  HOME: {
    path: '/',
    Component: Home,
    linkTo: () => '/'
  }
};
