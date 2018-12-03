import { connect } from 'react-redux';
import Home from '../components/home/Home';
import { getLongestPosts } from '../selectors/posts';
import { fetchPostsPromise } from '../actions/posts';

const mapStateToProps = state => ({
  posts: getLongestPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPostsPromise: () => {
    dispatch(fetchPostsPromise());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
