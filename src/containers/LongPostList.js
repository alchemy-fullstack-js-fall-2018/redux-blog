import { connect } from 'react-redux';
import PostList from '../components/posts/PostList';
import { getLongestPosts } from '../selectors/posts';
import { fetchPosts } from '../actions/posts';

const mapStateToProps = state => ({
  posts: getLongestPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
