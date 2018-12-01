import { connect } from 'react-redux';
import PostList from '../../presentational/posts/PostList.jsx';
import { getFilteredPosts } from '../../../data/state/selectors/posts';
import { fetchPosts, postsUpdateQuery } from '../../../data/state/actions/posts';

const mapStateToProps = state => ({
  posts: getFilteredPosts(state)
});

const mapDispatchToProps = dispatch => ({
  postsUpdateQuery: query => dispatch(postsUpdateQuery(query)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostList);
