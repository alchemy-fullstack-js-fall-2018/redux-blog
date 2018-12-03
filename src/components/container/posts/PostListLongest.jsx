import { connect } from 'react-redux';
import PostList from '../../presentational/posts/PostList.jsx';
import { getLongestPosts } from '../../../data/state/selectors/posts';
import { fetchPosts } from '../../../data/state/actions/posts';

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
