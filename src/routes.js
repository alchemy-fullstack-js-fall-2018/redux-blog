import Home from './components/home/Home';
import FilteredPosts from './containers/FilteredPosts';
import PostDetail from './containers/PostDetail';
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
};
