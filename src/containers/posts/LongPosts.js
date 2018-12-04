import { connect } from 'react-redux';
import Posts from '../../components/posts/Posts';
import { getLongPosts } from '../../selectors/posts';
import { fetchPosts } from '../../actions/posts';
import { loadingWithParagraph } from '../../components/loading/LoadingFallback';

const mapStateToProps = state => ({
  posts: getLongPosts(state)
});

const mapDispatchToProps = dispatch => ({
  fetchPosts: () => dispatch(fetchPosts())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(loadingWithParagraph(Posts));
