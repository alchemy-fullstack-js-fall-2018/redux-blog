import Home from './components/home/Home';

export const ROUTES = {
  HOME: {
    path: '/home',
    Component: Home,
    linkTo: () => '/home'
  }
}