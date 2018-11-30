import Home from '../components/home/Home';
import PostDetail from '../components/posts/PostDetail';

export default {
  HOME: {
    path: '/',
    component: Home,
    linkTo: () => '/'
  },
  POST_DETAIL: {
    path: '/posts/:id',
    component: PostDetail,
    linkTo: id => `/posts/${id}`
  }
};
