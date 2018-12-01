import { connect } from 'react-redux';
import PostList from '../../presentational/posts/PostList.jsx';
import { getLongestPosts } from '../../../data/state/selectors/posts';

const mapStateToProps = state => ({
  posts: getLongestPosts(state)
});

export default connect(
  mapStateToProps
)(PostList);
