import About from '../components/presentational/about/About.jsx';
import Home from '../components/presentational/home/Home.jsx';
import PostListFilter from '../components/container/posts/PostListFilter.js';
import PostDetailId from '../components/container/posts/PostDetailId.js';

export const ROUTES = {
  ABOUT: {
    path: '/about/',
    Component: About,
    linkTo: () => '/about'
  },
  HOME: {
    path: '/home/',
    Component: Home,
    linkTo: () => '/home',
  },
  POSTS: {
    path: '/posts/search',
    Component: PostListFilter,
    linkTo: () => '/posts/search'
  },
  POST_DETAIL: {
    path: '/posts/:id',
    Component: PostDetailId,
    linkTo: id => `/posts/${id}`
  },
};
