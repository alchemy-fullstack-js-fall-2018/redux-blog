import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getFilteredPosts, getSearchTerm } from '../../selectors/posts';
import { fetchPosts, updateSearchTerm } from '../../actions/posts';
import { loadingWithParagraph } from '../../components/loading/LoadingFallback';

const mapStateToProps = state => ({
  posts: getFilteredPosts(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts()),
  updateSearchTerm: ({ target }) => dispatch(updateSearchTerm(target.value))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Posts));
