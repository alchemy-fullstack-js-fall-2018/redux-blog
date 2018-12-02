import Home from './components/home/Home';
import FilteredPosts from './containers/FilteredPosts';
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
  }
};
