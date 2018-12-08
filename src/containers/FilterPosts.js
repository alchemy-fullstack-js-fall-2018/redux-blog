import { connect } from 'react-redux';
import Post from '../components/post/Post';
import { getPosts, getFilteredPosts, isLoading } from '../selectors/Posts';
import { fetchPosts, updatePostSearchTerm } from '../actions/posts';
import { loadingWithParagraph } from '../components/loading/loadingFallBack';

const mapStateToProps = state => ({
  posts: getPosts(state),
  filteredPosts: getFilteredPosts(state),
  loading: isLoading(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updatedSearchTerm: ({ target }) => dispatch(updatePostSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Post));
