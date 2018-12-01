import { connect } from 'react-redux';
import Home from '../components/home';
import { getLongestPosts } from '../selectors/posts';
import { getPosts } from '../services/blogApi';

const mapStateToProps = state => ({
  posts: getLongestPosts(state)
});

export default connect(
  mapStateToProps
)(Home);
