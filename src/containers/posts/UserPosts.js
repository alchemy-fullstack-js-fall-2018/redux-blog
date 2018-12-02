import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getPostsForUser } from '../../selectors/posts';
import { fetchPosts } from '../../actions/posts';

const mapStateToProps = (state, props) => ({
  posts: getPostsForUser(state, props.match.params.id)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
