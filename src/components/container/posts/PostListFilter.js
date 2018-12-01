import { connect } from 'react-redux';
import PostList from '../../presentational/posts/PostList.jsx';
import { getFilteredPosts } from '../../../data/state/selectors/posts';

const mapStateToProps = state => ({
  posts: getFilteredPosts(state)
});

export default connect(
  mapStateToProps
)(PostList);
