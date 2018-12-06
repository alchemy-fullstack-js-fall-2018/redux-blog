import { connect } from 'react-redux';
import PostsSearch from '../../components/posts/PostsSearch';
import {
  getFilteredPosts,
  getSearchTerm
} from '../../selectors/posts';
import { updatePostSearchTerm, fetchPosts } from '../../actions/posts';

const mapStateToProps = state => ({
  posts: getFilteredPosts(state),
  searchTerm: getSearchTerm(state)
});

const mapDispatchToProps = dispatch => ({
  updateSearchTerm: ({ target }) =>
    dispatch(updatePostSearchTerm(target.value)),
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(PostsSearch);
