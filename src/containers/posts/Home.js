import { connect } from 'react-redux';
import Home from '../../components/home/Home';
import { getLongestPosts } from '../../selectors/posts';
import { fetchPosts } from '../../actions/posts';

const mapStateToProps = state => ({
  longestPosts: getLongestPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts() {
    dispatch(fetchPosts());
  }
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Home);
