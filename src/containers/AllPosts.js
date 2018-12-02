import { connect } from 'react-redux';
import Posts from '../components/posts/Posts';
import { getPosts } from '../selectors/posts';
import { fetchPosts } from '../actions/posts';

const mapStateToProps = state => ({
  posts: getPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Posts);
