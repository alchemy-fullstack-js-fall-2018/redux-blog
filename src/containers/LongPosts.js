import { connect } from 'react-redux';
import Posts from '../components/post/Posts';
import { fetchPosts } from '../actions/posts';
import { getLongestPosts, isLoading } from '../selectors/Posts';
import { loadingWithParagraph } from '../components/loading/loadingFallBack';

const mapStateToProps = state => ({
  posts: getLongestPosts(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect (
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Posts));
